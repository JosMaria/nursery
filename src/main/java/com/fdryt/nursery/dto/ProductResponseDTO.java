package com.fdryt.nursery.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ProductResponseDTO {

    @JsonProperty("id")
    private Integer id;

    @JsonProperty("commonName")
    private String commonName;

    @JsonProperty("scientificName")
    private String scientificName;

    @JsonProperty("firstLetterLastname")
    private Character firstLetterLastname;

    @JsonProperty("family")
    private String nameFamily;

    @JsonProperty("status")
    private String status;

    @JsonProperty("priority")
    private Integer priority;

    @JsonProperty("urlPicture")
    private String urlPicture;
}
