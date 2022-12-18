package com.fdryt.nursery.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;

import static jakarta.persistence.CascadeType.PERSIST;
import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.GenerationType.SEQUENCE;
import static org.hibernate.annotations.OnDeleteAction.CASCADE;

@NoArgsConstructor
@Entity
@Table(name = "ornamental_plants")
public class OrnamentalPlant {

    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "ornamental_plant_sequence")
    @SequenceGenerator(name = "ornamental_plant_sequence", sequenceName = "ornamental_plant_sequence", allocationSize = 1)
    private Integer id;

    @Enumerated(value = STRING)
    private Status status;

    @OneToOne(cascade = PERSIST)
    @OnDelete(action = CASCADE)
    @JoinColumn(nullable = false, foreignKey = @ForeignKey(name = "fk_identification"))
    private Identification identification;

    public OrnamentalPlant(Status status, Identification identification) {
        this.status = status;
        this.identification = identification;
    }
}
