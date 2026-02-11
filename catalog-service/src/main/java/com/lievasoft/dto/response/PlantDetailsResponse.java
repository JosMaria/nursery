package com.lievasoft.dto.response;

import java.time.LocalDateTime;
import java.util.Map;

public record PlantDetailsResponse(
        Long id,
        String commonName,
        String scientificName,
        LocalDateTime updatedAt
) {
    public PlantDetailsResponse(Map<String, String> redisPlantHash) {
        this(
                Long.parseLong(redisPlantHash.get("id")),
                redisPlantHash.get("commonName"),
                redisPlantHash.get("scientificName"),
                LocalDateTime.parse(redisPlantHash.get("updatedAt"))
        );
    }

    public Map<String, String> mapToRedisHash() {
        return Map.of(
                "id", String.valueOf(id),
                "commonName", commonName,
                "scientificName", scientificName,
                "updatedAt", updatedAt.toString()
        );
    }
}
