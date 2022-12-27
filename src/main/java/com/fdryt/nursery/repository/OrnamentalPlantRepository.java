package com.fdryt.nursery.repository;

import com.fdryt.nursery.domain.OrnamentalPlant;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrnamentalPlantRepository extends JpaRepository<OrnamentalPlant, Integer> {

    @Query("""
            SELECT ornamental
            FROM OrnamentalPlant ornamental
            ORDER BY ornamental.priority ASC""")
    List<OrnamentalPlant> findAllSortedByPriority(Pageable pageable);
}
