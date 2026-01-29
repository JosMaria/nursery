package com.lievasoft.repository;

import com.lievasoft.entity.Plant;
import jakarta.data.repository.CrudRepository;
import jakarta.data.repository.Repository;
import jakarta.enterprise.context.ApplicationScoped;

@Repository
@ApplicationScoped
public interface PlantRepository extends CrudRepository<Plant, Long> {
}
