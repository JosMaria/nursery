package com.fdryt.nursery.config;

import com.fdryt.nursery.domain.Identification;
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

    @Bean("mapper")
    public ModelMapper mapper() {
        ModelMapper mapper = new ModelMapper();
        Converter<Identification, String> converter =
                context -> context.getSource().getFamily() != null ? context.getSource().getFamily().getName() : null;

        mapper.addMappings(new PropertyMap<OrnamentalPlant, IdentificationResponseDTO>() {
            @Override
            protected void configure() {
                map().setCommonName(source.getIdentification().getCommonName());
                map().setScientificName(source.getIdentification().getScientificName());
                map().setFirstLetterLastname(source.getIdentification().getFirstLetterLastname());
                using(converter).map(source.getIdentification(), destination.getNameFamily());
            }
        });

        Converter<Status, String> statusToString = context -> context.getSource().name();
        Converter<Set<String>, String> setStringToString = context ->
                context.getSource().stream()
                        .findFirst()
                        .orElse("https://image_not_found");

        mapper.addMappings(new PropertyMap<OrnamentalPlant, ProductResponseDTO>() {
            @Override
            protected void configure() {
                map().setCommonName(source.getIdentification().getCommonName());
                map().setScientificName(source.getIdentification().getScientificName());
                map().setFirstLetterLastname(source.getIdentification().getFirstLetterLastname());
                using(converter).map(source.getIdentification(), destination.getNameFamily());
                using(statusToString).map(source.getStatus(), destination.getStatus());
                using(setStringToString).map(source.getUrlPictures(), destination.getUrlPicture());
            }
        });

        return mapper;
    }
}
