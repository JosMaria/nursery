package com.fdryt.nursery.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateNewsDTO(

        @NotBlank(message = "The TITLE should not be null, empty or blank") String title,
        @NotBlank(message = "The DESCRIPTION should not be null, empty or blank") String description
) {}
