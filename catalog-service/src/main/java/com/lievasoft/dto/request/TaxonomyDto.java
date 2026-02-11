package com.lievasoft.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public record TaxonomyDto(
        String kingdom,
        String division,

        @JsonProperty("class")
        String clazz,

        String order,
        String family,
        String genus,
        String species
) {
}
