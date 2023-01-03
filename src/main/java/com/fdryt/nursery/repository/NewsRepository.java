package com.fdryt.nursery.repository;

import com.fdryt.nursery.domain.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface NewsRepository extends JpaRepository<News, Integer> {

    @Query("""
            SELECT news
            FROM News news
            WHERE :dateTimeNow BETWEEN news.startDate AND news.endDate""")
    List<News> findAllByStartDateAndEndDateBetween(@Param("dateTimeNow") LocalDateTime now);
}
