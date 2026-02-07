package com.lievasoft.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lievasoft.dto.PlantCardResponse;
import com.lievasoft.dto.PlantCreateDto;
import com.lievasoft.dto.PlantResponseCreateDto;
import com.lievasoft.entity.Plant;
import com.lievasoft.repository.PlantRepository;
import io.quarkus.cache.CacheResult;
import io.quarkus.redis.datasource.RedisDataSource;
import io.quarkus.redis.datasource.value.ValueCommands;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.List;

@ApplicationScoped
public class PlantService {

    private final ValueCommands<String, String> valueCommands;
    private final PlantRepository plantRepository;
    private final ObjectMapper objectMapper;

    public PlantService(PlantRepository plantRepository, RedisDataSource redisDataSource, ObjectMapper objectMapper) {
        this.plantRepository = plantRepository;
        valueCommands = redisDataSource.value(String.class);
        this.objectMapper = objectMapper;
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

    public void cachePlantList(List<PlantCardResponse> plantCards) {
        String plantCardsJson = serializePlantList(plantCards);
        valueCommands.set("plantCards:list", plantCardsJson);
    }

    private String serializePlantList(List<PlantCardResponse> plantCards) {
        try {
            return objectMapper.writeValueAsString(plantCards);

        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error serializing plant list", e);
        }
    }
}
