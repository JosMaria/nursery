package com.fdryt.nursery.domain;

import jakarta.persistence.*;

import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "ornamental_plants")
public class OrnamentalPlant {

    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "ornamental_plant_sequence")
    @SequenceGenerator(name = "ornamental_plant_sequence", sequenceName = "ornamental_plant_sequence", allocationSize = 1)
    private Long id;

    @Enumerated(value = STRING)
    private Status status;
}
