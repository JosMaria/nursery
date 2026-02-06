package com.lievasoft.entity;

import com.lievasoft.dto.PlantCardResponse;
import com.lievasoft.dto.PlantCreateDto;
import jakarta.persistence.*;

import java.time.LocalDateTime;

import static com.lievasoft.plant.PlantConstant.FETCH_PLANT_CARDS_NAME;
import static com.lievasoft.plant.PlantConstant.FETCH_PLANT_CARDS_QUERY;
import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "plants")
@NamedNativeQuery(
        name = FETCH_PLANT_CARDS_NAME,
        query = FETCH_PLANT_CARDS_QUERY,
        resultSetMapping = "PlantCardsMapping"

)
@SqlResultSetMapping(
        name = "PlantCardsMapping",
        classes = @ConstructorResult(
                targetClass = PlantCardResponse.class,
                columns = {
                        @ColumnResult(name = "common_name", type = String.class),
                        @ColumnResult(name = "scientific", type = String.class)
                })
)
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
