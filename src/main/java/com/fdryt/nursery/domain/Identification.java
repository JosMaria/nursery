package com.fdryt.nursery.domain;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.SEQUENCE;

@NoArgsConstructor
@Entity
@Table(name = "identifications")
public class Identification {

    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "identification_sequence")
    @SequenceGenerator(name = "identification_sequence", sequenceName = "identification_sequence", allocationSize = 1)
    private Long id;

    @Column(length = 50, nullable = false, unique = true)
    private String commonName;

    @Column(length = 50)
    private String scientificName;

    private Character firstLetterLastname;

    @ManyToOne
    @JoinColumn(nullable = false, foreignKey = @ForeignKey(name = "fk_identification"))
    private Family family;

    @ManyToMany(fetch = LAZY)
    @JoinTable(
            name = "identifications_classifications",
            joinColumns = @JoinColumn(foreignKey = @ForeignKey(name = "fk_iden_classi"), name = "identification_id"),
            inverseJoinColumns = @JoinColumn(foreignKey = @ForeignKey(name = "fk_classi_iden"), name = "classification_id"))
    private final Set<Classification> classificationsByUtility = new HashSet<>();

    public Identification(String commonName, String scientificName, Character firstLetterLastname, Family family) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.firstLetterLastname = firstLetterLastname;
        this.family = family;
    }
}
