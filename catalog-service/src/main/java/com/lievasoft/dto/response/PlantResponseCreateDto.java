package com.lievasoft.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.lievasoft.dto.request.CommonNameDto;
import com.lievasoft.dto.request.TaxonomyDto;
import com.lievasoft.entity.Plant;

import java.time.LocalDateTime;
import java.util.Set;

public record PlantResponseCreateDto(
        Long id,

        @JsonProperty("scientific_name")
        String scientificName,

        @JsonProperty("created_at")
        LocalDateTime createdAt,

        TaxonomyDto taxonomy,

        @JsonProperty("common_names")
        Set<CommonNameDto> commonNames
) {

    public PlantResponseCreateDto(Long id, Plant persistedPlant, TaxonomyDto taxonomy, Set<CommonNameDto> commonNames) {
        this(
                id,
                persistedPlant.getScientificName(),
                persistedPlant.getCreatedAt(),
                taxonomy,
                commonNames
        );
    }
}
