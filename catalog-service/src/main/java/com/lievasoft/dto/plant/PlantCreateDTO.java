package com.lievasoft.dto.plant;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Collection;

public record PlantCreateDTO(
        @JsonProperty("scientific_name")
        String scientificName,

        @JsonProperty("common_names")
        Collection<CommonNameCreateDTO> commonNamesDTO,

        @JsonProperty("taxonomy")
        TaxonomyCreateDTO taxonomyDTO
) {
}
