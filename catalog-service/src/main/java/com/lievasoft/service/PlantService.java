package com.lievasoft.service;

import com.lievasoft.dto.PlantCardResponse;
import com.lievasoft.dto.PlantCreateDto;
import com.lievasoft.dto.PlantResponseCreateDto;
import com.lievasoft.entity.Plant;
import com.lievasoft.repository.PlantRepository;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class PlantService {

    private static final List<Plant> PLANTS = new ArrayList<>();
    private final PlantRepository plantRepository;

    public PlantService(PlantRepository plantRepository) {
        this.plantRepository = plantRepository;
    }

    public PlantResponseCreateDto create(PlantCreateDto payload) {
        var plantToPersist = new Plant(payload);
        plantRepository.create(plantToPersist);
        return new PlantResponseCreateDto(plantToPersist.getId(), plantToPersist);
    }

    public List<PlantCardResponse> fetchPlantCards() {
        return plantRepository.fetchPlantCards();
    }
}
