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

    public TaxonomyDto {
        kingdom = kingdom.toLowerCase();
        division = division.toLowerCase();
        clazz = clazz.toLowerCase();
        order = order.toLowerCase();
        family = family.toLowerCase();
        genus = genus.toLowerCase();
        species = species.toLowerCase();
    }
}
