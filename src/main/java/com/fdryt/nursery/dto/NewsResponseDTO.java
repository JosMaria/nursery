package com.fdryt.nursery.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class NewsResponseDTO {

    private Integer id;
    private String title;
    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime started;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime ended;
}
