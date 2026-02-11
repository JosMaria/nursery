package com.lievasoft.entity;

import com.lievasoft.dto.PlantCardResponse;
import com.lievasoft.dto.PlantCreateDtoV2;
import com.lievasoft.dto.PlantDetailsResponse;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ColumnResult;
import jakarta.persistence.ConstructorResult;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.NamedNativeQueries;
import jakarta.persistence.NamedNativeQuery;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.SqlResultSetMapping;
import jakarta.persistence.SqlResultSetMappings;
import jakarta.persistence.Table;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import static com.lievasoft.plant.PlantConstant.FETCH_PLANT_CARDS_NAME;
import static com.lievasoft.plant.PlantConstant.FETCH_PLANT_CARDS_QUERY;
import static com.lievasoft.plant.PlantConstant.FETCH_PLANT_DETAILS_NAME;
import static com.lievasoft.plant.PlantConstant.FETCH_PLANT_DETAILS_QUERY;
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
                                @ColumnResult(name = "updated_at", type = LocalDateTime.class)
                        })
        )
})
public class Plant {

    @Id
    @SequenceGenerator(name = "sequence", sequenceName = "plant_sequence", allocationSize = 1)
    @GeneratedValue(strategy = SEQUENCE, generator = "sequence")
    private Long id;

    @Column(name = "scientific_name")
    private String scientificName;

    @OneToMany(mappedBy = "plant", cascade = CascadeType.PERSIST)
    private final Set<CommonName> commonNames = new HashSet<>();

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public Plant() {
    }

    public Plant(PlantCreateDtoV2 plantCreateDto) {
        this.scientificName = plantCreateDto.scientificName();
    }

    public Long getId() {
        return this.id;
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

    public void addCommonNames(Set<CommonName> commonNames) {
        commonNames.forEach(commonName -> {
            this.commonNames.add(commonName);
            commonName.setPlant(this);
        });
    }
}
