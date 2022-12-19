package com.fdryt.nursery.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "families")
public class Family {

    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "family_generator")
    @SequenceGenerator(name = "family_generator")
    private Integer id;

    @Column(length = 50, nullable = false, unique = true)
    private String commonName;

    public Family(String commonName) {
        this.commonName = commonName;
    }
}
