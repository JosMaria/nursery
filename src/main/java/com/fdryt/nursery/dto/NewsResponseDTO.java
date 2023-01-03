package com.fdryt.nursery.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class NewsResponseDTO {

    private String title;
    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime started;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime ended;
}
