package com.lievasoft.entity;

import com.lievasoft.dto.PlantCreateDto;
import jakarta.persistence.*;

import java.time.LocalDateTime;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "plants")
public class Plant {

    @Id
    @SequenceGenerator(name = "sequence", sequenceName = "plant_sequence")
    @GeneratedValue(strategy = SEQUENCE, generator = "sequence")
    private Long id;

    @Column(name = "common_name", nullable = false)
    private String commonName;

    @Column(name = "scientific_name")
    private String scientificName;

    @Column(name = "is_available")
    private boolean isAvailable;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public Plant() {
    }

    public Plant(PlantCreateDto plantCreateDto) {
        this.commonName = plantCreateDto.commonName();
        this.scientificName = plantCreateDto.scientificName();
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() {
        return this.id;
    }

    public String getCommonName() {
        return this.commonName;
    }

    public String getScientificName() {
        return this.scientificName;
    }

    public LocalDateTime getCreatedAt() {
        return this.createdAt;
    }
}
