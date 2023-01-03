package com.fdryt.nursery.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;

public record CreateNewsDTO(

        @NotBlank(message = "The TITLE should not be null, empty or blank")
        @JsonProperty("title")
        String title,

        @NotBlank(message = "The DESCRIPTION should not be null, empty or blank")
        @JsonProperty("description")
        String description
) {}
