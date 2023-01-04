package com.fdryt.nursery.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CreateNewsDTO {

        @NotBlank(message = "The TITLE should not be null, empty or blank")
        @JsonProperty("title")
        private String title;

        @NotBlank(message = "The DESCRIPTION should not be null, empty or blank")
        @JsonProperty("description")
        private String description;

        @FutureOrPresent(message = "The START should not be past or present date")
        @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
        @JsonProperty("start")
        private LocalDateTime startDate;

        @NotNull(message = "The END should not be null")
        @Future(message = "The END should not be past or present date")
        @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
        @JsonProperty("end")
        private LocalDateTime endDate;
}
