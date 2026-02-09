package com.lievasoft.dto;

import java.time.LocalDateTime;
import java.util.Map;

public record PlantDetailsResponse(
        Long id,
        String commonName,
        String scientificName,
        boolean isAvailable,
        LocalDateTime updatedAt
) {
    public PlantDetailsResponse(Map<String, String> redisPlantHash) {
        this(
                Long.parseLong(redisPlantHash.get("id")),
                redisPlantHash.get("commonName"),
                redisPlantHash.get("scientificName"),
                Boolean.parseBoolean(redisPlantHash.get("isAvailable")),
                LocalDateTime.parse(redisPlantHash.get("updatedAt"))
        );
    }

    public Map<String, String> mapToRedisHash() {
        return Map.of(
                "id", String.valueOf(id),
                "commonName", commonName,
                "scientificName", scientificName,
                "isAvailable", String.valueOf(isAvailable),
                "updatedAt", updatedAt.toString()
        );
    }
}
