package com.lievasoft.repository;

import com.lievasoft.entity.Plant;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class PlantRepository implements PanacheRepository<Plant> {

}
