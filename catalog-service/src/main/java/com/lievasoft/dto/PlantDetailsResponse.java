package com.lievasoft.dto;

import java.time.LocalDateTime;

public record PlantDetailsResponse(
        String commonName,
        String scientificName,
        boolean isAvailable,
        LocalDateTime updatedAt
) {
}
