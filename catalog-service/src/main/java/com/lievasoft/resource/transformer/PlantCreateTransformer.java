package com.lievasoft.resource.transformer;

import com.lievasoft.dto.request.PlantCreateDto;
import com.lievasoft.dto.request.PlantCreateRequest;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class PlantCreateTransformer {

    public PlantCreateDto transform(PlantCreateRequest request) {
        return new PlantCreateDto(
                request.scientificName().toLowerCase(),
                request.commonNames(),
                request.taxonomyDto()
        );
    }
}
