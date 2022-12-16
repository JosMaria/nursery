package com.fdryt.nursery.repository;

import com.fdryt.nursery.domain.OrnamentalPlant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrnamentalPlantRepository extends JpaRepository<OrnamentalPlant, Long> {
}
