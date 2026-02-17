package com.lievasoft.dto.plant;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.lievasoft.entity.Plant;

import java.time.LocalDateTime;
import java.util.Collection;

public record PlantCreateResponse(
        Long id,

        @JsonProperty("scientific_name")
        String scientificName,

        @JsonProperty("created_at")
        LocalDateTime createdAt,

        @JsonProperty("taxonomy")
        TaxonomyCreateDTO taxonomyCreateDTO,

        @JsonProperty("common_names")
        Collection<CommonNameCreateDTO> commonNamesDTO
) {

    public PlantCreateResponse(Plant persistedPlant,
                               TaxonomyCreateDTO taxonomyCreateDTO,
                               Collection<CommonNameCreateDTO> commonNamesDTO) {
        this(
                persistedPlant.getId(),
                persistedPlant.getScientificName(),
                persistedPlant.getCreatedAt(),
                taxonomyCreateDTO,
                commonNamesDTO
        );
    }
}
