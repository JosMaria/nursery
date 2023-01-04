package com.fdryt.nursery.config;

import com.fdryt.nursery.domain.Family;
import com.fdryt.nursery.domain.OrnamentalPlant;
import com.fdryt.nursery.domain.Status;
import com.fdryt.nursery.dto.IdentificationResponseDTO;
import com.fdryt.nursery.dto.ProductResponseDTO;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Set;

@Configuration
public class MapperConfig {

    private static final String URL_TO_IMAGE_NOT_FOUND = "https://image_not_found";

    @Bean("ornamentalPlantMapper")
    public ModelMapper mapper() {
        ModelMapper modelMapper = new ModelMapper();

        Converter<Family, String> enumFamilyToString =
                context -> context.getSource() != null ? context.getSource().getName() : null;

        Converter<Status, String> enumStatusToString = context -> context.getSource().name();

        Converter<Set<String>, String> setOfStringUrlsToStringUrl =
                context -> context.getSource()
                        .stream()
                        .findFirst()
                        .orElse(URL_TO_IMAGE_NOT_FOUND);

        modelMapper.addMappings(new PropertyMap<OrnamentalPlant, IdentificationResponseDTO>() {
            @Override
            protected void configure() {
                map().setCommonName(source.getIdentification().getCommonName());
                map().setScientificName(source.getIdentification().getScientificName());
                map().setFirstLetterLastname(source.getIdentification().getFirstLetterLastname());
                using(enumFamilyToString).map(source.getIdentification().getFamily(), destination.getNameFamily());
            }
        });

        modelMapper.addMappings(new PropertyMap<OrnamentalPlant, ProductResponseDTO>() {
            @Override
            protected void configure() {
                map().setCommonName(source.getIdentification().getCommonName());
                map().setScientificName(source.getIdentification().getScientificName());
                map().setFirstLetterLastname(source.getIdentification().getFirstLetterLastname());
                using(enumFamilyToString).map(source.getIdentification().getFamily(), destination.getNameFamily());
                using(enumStatusToString).map(source.getStatus(), destination.getStatus());
                using(setOfStringUrlsToStringUrl).map(source.getUrlPictures(), destination.getUrlPicture());
            }
        });

        return modelMapper;
    }
}
