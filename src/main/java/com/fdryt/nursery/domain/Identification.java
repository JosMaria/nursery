package com.fdryt.nursery.domain;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import static jakarta.persistence.GenerationType.SEQUENCE;

@NoArgsConstructor
@Entity
public class Identification {

    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "identification_generator")
    @SequenceGenerator(name = "identification_generator")
    private Long id;

    @Column(length = 50, nullable = false, unique = true)
    private String commonName;

    @Column(length = 50)
    private String scientificName;

    private Character firstLetterLastname;

    @ManyToOne
    private Family family;
}
