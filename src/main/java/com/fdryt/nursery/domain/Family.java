package com.fdryt.nursery.domain;

import jakarta.persistence.*;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity
public class Family {

    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "family_generator")
    @SequenceGenerator(name = "family_generator")
    private Long id;

    @Column(length = 50, nullable = false, unique = true)
    private String commonName;
}
