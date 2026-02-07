package com.lievasoft.dto;

import java.time.LocalDateTime;

public record PlantDetailsResponse(
        Long id,
        String commonName,
        String scientificName,
        boolean isAvailable,
        LocalDateTime updatedAt
) {
}
