package com.lievasoft.repository;

import com.lievasoft.dto.PlantCardResponse;
import com.lievasoft.dto.PlantDetailsResponse;
import com.lievasoft.entity.Plant;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.NoResultException;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;

import static com.lievasoft.plant.PlantConstant.FETCH_PLANT_CARDS_NAME;
import static com.lievasoft.plant.PlantConstant.FETCH_PLANT_DETAILS_NAME;

@ApplicationScoped
public class PlantRepository implements PanacheRepository<Plant> {

    @Transactional
    public void create(Plant plant) {
        persist(plant);
    }

    public List<PlantCardResponse> fetchPlantCards() {
        return getEntityManager()
                .createNamedQuery(FETCH_PLANT_CARDS_NAME, PlantCardResponse.class)
                .getResultList();
    }

    public Optional<PlantDetailsResponse> fetchPlantDetailsById(Long plantId) {
        try {
            var plantDetailsResponse = getEntityManager()
                    .createNamedQuery(FETCH_PLANT_DETAILS_NAME, PlantDetailsResponse.class)
                    .setParameter("id", plantId)
                    .getSingleResult();

            return Optional.ofNullable(plantDetailsResponse);

        } catch (NoResultException e) {
            return Optional.empty();
        }
    }
}
