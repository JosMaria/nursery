package com.lievasoft.dto;

import com.lievasoft.entity.Plant;

import java.time.LocalDateTime;

public record PlantResponseCreateDto(
        Long id,
        String commonName,
        String scientificName,
        LocalDateTime createdAt
) {
    public PlantResponseCreateDto(Long id, Plant persistedPlant) {
        this(
                id,
                persistedPlant.getCommonName(),
                persistedPlant.getScientificName(),
                persistedPlant.getCreatedAt()
        );
    }
}
