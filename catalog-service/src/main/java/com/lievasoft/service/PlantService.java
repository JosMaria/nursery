package com.lievasoft.service;

import com.lievasoft.dto.PlantCardResponse;
import com.lievasoft.dto.PlantCreateDto;
import com.lievasoft.dto.PlantDetailsResponse;
import com.lievasoft.dto.PlantResponseCreateDto;
import com.lievasoft.entity.Plant;
import com.lievasoft.repository.PlantRepository;
import io.quarkus.cache.CacheResult;
import io.quarkus.redis.datasource.RedisDataSource;
import io.quarkus.redis.datasource.hash.HashCommands;
import io.quarkus.redis.datasource.keys.KeyCommands;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.EntityNotFoundException;

import java.time.Duration;
import java.util.List;
import java.util.Map;

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
        plantRepository.create(plantToPersist);
        return new PlantResponseCreateDto(plantToPersist.getId(), plantToPersist);
    }

    @CacheResult(cacheName = "plant-cards-list")
    public List<PlantCardResponse> fetchPlantCards() {
        return plantRepository.fetchPlantCards();
    }

    public PlantDetailsResponse fetchPlantDetailsById(Long plantId) {
        var plantDetailsResponse = plantRepository.fetchPlantDetailsById(plantId)
                .orElseThrow(() -> new EntityNotFoundException("Plant with ID %s not found".formatted(plantId)));
        saveToRedisCache(plantDetailsResponse);
        return plantDetailsResponse;
    }

    private void saveToRedisCache(PlantDetailsResponse plantDetails) {
        Long plantId = plantDetails.id();
        String key = "plant:details:%s".formatted(plantId);
        Map<String, String> hash = Map.of(
                "id", String.valueOf(plantId),
                "commonName", plantDetails.commonName(),
                "scientificName", plantDetails.scientificName(),
                "isAvailable", String.valueOf(plantDetails.isAvailable()),
                "updatedAt", plantDetails.updatedAt().toString()
        );

        this.hashCommands.hset(key, hash);
        this.keyCommands.expire(key, Duration.ofMinutes(30));
    }
}
