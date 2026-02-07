package com.lievasoft.entity;

import com.lievasoft.dto.PlantCardResponse;
import com.lievasoft.dto.PlantCreateDto;
import com.lievasoft.dto.PlantDetailsResponse;
import jakarta.persistence.*;

import java.time.LocalDateTime;

import static com.lievasoft.plant.PlantConstant.*;
import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "plants")
@NamedNativeQueries({
        @NamedNativeQuery(
                name = FETCH_PLANT_CARDS_NAME,
                query = FETCH_PLANT_CARDS_QUERY,
                resultSetMapping = "PlantCardsMapping"
        ),
        @NamedNativeQuery(
                name = FETCH_PLANT_DETAILS_NAME,
                query = FETCH_PLANT_DETAILS_QUERY,
                resultSetMapping = "PlantDetailsMapping"
        ),

})
@SqlResultSetMappings({
        @SqlResultSetMapping(
                name = "PlantCardsMapping",
                classes = @ConstructorResult(
                        targetClass = PlantCardResponse.class,
                        columns = {
                                @ColumnResult(name = "common_name", type = String.class),
                                @ColumnResult(name = "scientific", type = String.class)
                        })
        ),
        @SqlResultSetMapping(
                name = "PlantDetailsMapping",
                classes = @ConstructorResult(
                        targetClass = PlantDetailsResponse.class,
                        columns = {
                                @ColumnResult(name = "id", type = Long.class),
                                @ColumnResult(name = "common_name", type = String.class),
                                @ColumnResult(name = "scientific_name", type = String.class),
                                @ColumnResult(name = "is_available", type = Boolean.class),
                                @ColumnResult(name = "updated_at", type = LocalDateTime.class)
                        })
        )
})
public class Plant {

    @Id
    @SequenceGenerator(name = "sequence", sequenceName = "plant_sequence", allocationSize = 1)
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

    @PrePersist
    public void onCreated() {
        var localDateTime = LocalDateTime.now();
        this.createdAt = localDateTime;
        this.updatedAt = localDateTime;
    }

    @PreUpdate
    public void onUpdated() {
        this.updatedAt = LocalDateTime.now();
    }
}
