package com.lievasoft.entity;

import com.lievasoft.dto.PlantCreateDto;

import java.time.LocalDateTime;

public class Plant {

    private Long id;
    private String commonName;
    private String scientificName;
    private boolean isAvailable;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public Plant(PlantCreateDto plantCreateDto) {
        this.commonName = plantCreateDto.commonName();
        this.scientificName = plantCreateDto.scientificName();
        this.createdAt = LocalDateTime.now();
    }

    public String getCommonName() {
        return commonName;
    }

    public String getScientificName() {
        return scientificName;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
