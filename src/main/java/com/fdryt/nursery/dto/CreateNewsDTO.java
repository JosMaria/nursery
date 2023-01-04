package com.fdryt.nursery.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record CreateNewsDTO(

        @NotBlank(message = "The TITLE should not be null, empty or blank")
        @JsonProperty("title")
        String title,

        @NotBlank(message = "The DESCRIPTION should not be null, empty or blank")
        @JsonProperty("description")
        String description,

        @FutureOrPresent(message = "The START should not be past or present date")
        @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
        @JsonProperty("start")
        LocalDateTime startDate,

        @NotNull(message = "The END should not be null")
        @Future(message = "The END should not be past or present date")
        @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
        @JsonProperty("end")
        LocalDateTime endDate
) {}
