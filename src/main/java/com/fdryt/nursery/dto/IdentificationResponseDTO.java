package com.fdryt.nursery.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class IdentificationResponseDTO {

    private Integer id;
    private String commonName;
    private String scientificName;
    private Character firstLetterLastname;
    private String nameFamily;
    private String status;
}
