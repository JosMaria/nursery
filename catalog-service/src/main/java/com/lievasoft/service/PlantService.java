package com.lievasoft.service;

import com.lievasoft.dto.PlantCreateDto;
import com.lievasoft.dto.PlantResponseCreateDto;
import com.lievasoft.entity.Plant;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class PlantService {

    private static final List<Plant> PLANTS = new ArrayList<>();

    public PlantResponseCreateDto create(PlantCreateDto payload) {
        var plantToPersist = new Plant(payload);
        PLANTS.add(plantToPersist);
        long generatedPlantId = PLANTS.size();
        return new PlantResponseCreateDto(generatedPlantId, plantToPersist);
    }
}
