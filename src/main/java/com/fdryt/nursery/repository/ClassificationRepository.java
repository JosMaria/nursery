package com.fdryt.nursery.repository;

import com.fdryt.nursery.domain.Classification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassificationRepository extends JpaRepository<Classification, Integer> {
}
