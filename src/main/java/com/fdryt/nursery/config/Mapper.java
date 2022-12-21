package com.fdryt.nursery.config;

import org.mapstruct.factory.Mappers;

@org.mapstruct.Mapper
public interface Mapper {

    public static final Mapper INSTANCE = Mappers.getMapper(Mapper.class);

 /*   @Mapping(source = "ornamental.id", target = "id")
    @Mapping(source = "ornamental.status", target = "status")
    @Mapping(source = "identification.commonName", target = "commonName")
    @Mapping(source = "identification.scientificName", target = "scientificName")
    @Mapping(source = "identification.firstLetterLastname", target = "firstLetterLastname")
    @Mapping(source = "family.name", target = "nameFamily")
    IdentificationResponseDTO from(OrnamentalPlant ornamental, Identification identification, Family family);*/
}
