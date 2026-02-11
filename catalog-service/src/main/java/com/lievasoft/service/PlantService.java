package com.lievasoft.service;

import com.lievasoft.dto.response.PlantCardResponse;
import com.lievasoft.dto.request.PlantCreateDto;
import com.lievasoft.dto.response.PlantDetailsResponse;
import com.lievasoft.dto.response.PlantResponseCreateDto;
import com.lievasoft.entity.CommonName;
import com.lievasoft.entity.Plant;
import com.lievasoft.entity.Taxonomy;
import com.lievasoft.exception.PlantNotFoundException;
import com.lievasoft.repository.PlantRepository;
import io.quarkus.cache.CacheResult;
import io.quarkus.redis.datasource.RedisDataSource;
import io.quarkus.redis.datasource.hash.HashCommands;
import io.quarkus.redis.datasource.keys.KeyCommands;
import jakarta.enterprise.context.ApplicationScoped;

import java.time.Duration;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

@ApplicationScoped
public class PlantService {

    private final HashCommands<String, String, String> hashCommands;
    private final KeyCommands<String> keyCommands;
    private final PlantRepository plantRepository;

    public PlantService(RedisDataSource redisDataSource, PlantRepository plantRepository) {
        this.hashCommands = redisDataSource.hash(String.class);
        this.keyCommands = redisDataSource.key();
        this.plantRepository = plantRepository;
    }

    public PlantResponseCreateDto create(PlantCreateDto payload) {
        var plantToPersist = new Plant(payload);
        var commonNamesToPersist = payload.commonNames()
                .stream().map(CommonName::new)
                .collect(Collectors.toSet());
        var taxonomyToPersist = new Taxonomy(payload.taxonomyDto());

        plantToPersist.addCommonNames(commonNamesToPersist);
        plantToPersist.addTaxonomy(taxonomyToPersist);
        plantRepository.create(plantToPersist);
        return new PlantResponseCreateDto(plantToPersist.getId(), plantToPersist);
    }

    @CacheResult(cacheName = "plant-cards-list")
    public List<PlantCardResponse> fetchPlantCards() {
        return plantRepository.fetchPlantCards();
    }

    public PlantDetailsResponse fetchPlantDetailsById(Long plantId) {
        var key = "plant:details:%s".formatted(plantId);
        Map<String, String> redisPlantHash = hashCommands.hgetall(key);

        if (!(Objects.isNull(redisPlantHash) || redisPlantHash.isEmpty()))
            return new PlantDetailsResponse(redisPlantHash);

        else {
            var plantDetailsResponse = plantRepository.fetchPlantDetailsById(plantId)
                    .orElseThrow(() -> new PlantNotFoundException(plantId));
            saveToRedisCache(key, plantDetailsResponse);
            return plantDetailsResponse;
        }
    }

    private void saveToRedisCache(String key, PlantDetailsResponse plantDetails) {
        Map<String, String> hashToPersist = plantDetails.mapToRedisHash();
        this.hashCommands.hset(key, hashToPersist);
        this.keyCommands.expire(key, Duration.ofMinutes(1));
    }
}
