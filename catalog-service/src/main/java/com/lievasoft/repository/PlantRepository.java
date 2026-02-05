package com.lievasoft.repository;

import com.lievasoft.dto.PlantCardResponse;
import com.lievasoft.entity.Plant;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.List;

@ApplicationScoped
public class PlantRepository implements PanacheRepository<Plant> {

    @Transactional
    public void create(Plant plant) {
        persist(plant);
    }

    public List<PlantCardResponse> fetchPlantCards() {
        return getEntityManager()
                .createNamedQuery("Plant.fetchPlantCards", PlantCardResponse.class)
                .getResultList();
    }

}
