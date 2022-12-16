package com.fdryt.nursery.domain;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import static jakarta.persistence.GenerationType.SEQUENCE;

@NoArgsConstructor
@Entity
@Table(name = "families")
public class Family {

    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "family_generator")
    @SequenceGenerator(name = "family_generator")
    private Long id;

    @Column(length = 50, nullable = false, unique = true)
    private String commonName;

    public Family(String commonName) {
        this.commonName = commonName;
    }
}
