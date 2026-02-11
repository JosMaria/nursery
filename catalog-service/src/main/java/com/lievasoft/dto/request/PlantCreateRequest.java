package com.lievasoft.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public record PlantCreateRequest(
        @JsonProperty("scientific_name")
        String scientificName,

        @JsonProperty("common_names")
        List<CommonNameDto> commonNames,

        @JsonProperty("taxonomy")
        TaxonomyDto taxonomyDto
) {
}
