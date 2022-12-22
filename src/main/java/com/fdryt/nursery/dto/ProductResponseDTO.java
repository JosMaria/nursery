package com.fdryt.nursery.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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

    @JsonProperty("pictures")
    private Set<String> urlPictures;
}
