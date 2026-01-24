package com.lievasoft.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record PlantCreateDto(
        @JsonProperty("name")
        String commonName,
        String scientificName
) {
}
