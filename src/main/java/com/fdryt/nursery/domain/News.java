package com.fdryt.nursery.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "news")
public class News {

    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "news_sequence")
    @SequenceGenerator(name = "news_sequence", sequenceName = "news_sequence", allocationSize = 1)
    private Integer id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private LocalDateTime startDate;

    @Column(nullable = false)
    private LocalDateTime endDate;
}
