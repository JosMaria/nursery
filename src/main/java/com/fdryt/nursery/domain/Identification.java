package com.fdryt.nursery.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import static jakarta.persistence.CascadeType.PERSIST;
import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.SEQUENCE;

@NoArgsConstructor
@Entity
@Table(name = "identifications")
public class Identification {

    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "identification_sequence")
    @SequenceGenerator(name = "identification_sequence", sequenceName = "identification_sequence", allocationSize = 1)
    private Integer id;

    @Column(length = 50, nullable = false, unique = true)
    private String commonName;

    @Column(length = 50)
    private String scientificName;

    private Character firstLetterLastname;

    @OneToOne(cascade = PERSIST)
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_family"))
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

    public void addClassification(Classification classification) {
        classificationsByUtility.add(classification);
    }

    public void addClassifications(Collection<Classification> classifications) {
        classificationsByUtility.addAll(classifications);
    }
}
