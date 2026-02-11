package com.lievasoft.entity;

import com.lievasoft.dto.request.TaxonomyDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "taxonomies")
public class Taxonomy {

    @Id
    private Long id;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plant_id")
    private Plant plant;

    private String kingdom;
    private String division;

    @Column(name = "class")
    private String clazz;

    @Column(name = "taxonomic_order")
    private String order;

    private String family;
    private String genus;
    private String species;

    public Taxonomy() {
    }

    public Taxonomy(TaxonomyDto taxonomyDto) {
        this.kingdom = taxonomyDto.kingdom();
        this.division = taxonomyDto.division();
        this.clazz = taxonomyDto.clazz();
        this.order = taxonomyDto.order();
        this.family = taxonomyDto.family();
        this.genus = taxonomyDto.genus();
        this.species = taxonomyDto.species();
    }

    public void setPlant(Plant plant) {
        this.plant = plant;
    }
}
