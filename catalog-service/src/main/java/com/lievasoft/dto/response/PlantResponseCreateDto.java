package com.lievasoft.dto.response;

import com.lievasoft.entity.Plant;

import java.time.LocalDateTime;

public record PlantResponseCreateDto(
        Long id,
        String scientificName,
        LocalDateTime createdAt
) {
    public PlantResponseCreateDto(Long id, Plant persistedPlant) {
        this(
                id,
                persistedPlant.getScientificName(),
                persistedPlant.getCreatedAt()
        );
    }
}
