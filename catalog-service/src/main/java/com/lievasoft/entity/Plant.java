package com.lievasoft.entity;

import com.lievasoft.dto.plant.PlantCreateDTO;
import com.lievasoft.dto.response.PlantCardResponse;
import com.lievasoft.dto.response.PlantDetailsResponse;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

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
                                @ColumnResult(name = "updated_at", type = LocalDateTime.class)
                        })
        )
})
public class Plant {

    @Id
    @SequenceGenerator(name = "sequence", sequenceName = "plant_sequence", allocationSize = 1)
    @GeneratedValue(strategy = SEQUENCE, generator = "sequence")
    private Long id;

    @Column(name = "scientific_name", unique = true)
    private String scientificName;

    @OneToOne(mappedBy = "plant", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private Taxonomy taxonomy;

    @OneToMany(mappedBy = "plant", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private final Set<CommonName> commonNames = new HashSet<>();

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public Plant() {
    }

    public Plant(PlantCreateDTO plantCreateDTO) {
        this.scientificName = plantCreateDTO.scientificName();
    }

    public Long getId() {
        return this.id;
    }

    public String getScientificName() {
        return this.scientificName;
    }

    public void setTaxonomy(Taxonomy taxonomy) {
        this.taxonomy = taxonomy;
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

    public void addTaxonomy(Taxonomy taxonomy) {
        this.setTaxonomy(taxonomy);
        taxonomy.setPlant(this);
    }
}
