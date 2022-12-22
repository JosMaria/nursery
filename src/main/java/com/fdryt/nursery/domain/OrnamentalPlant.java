package com.fdryt.nursery.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import static jakarta.persistence.CascadeType.PERSIST;
import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.GenerationType.SEQUENCE;
import static org.hibernate.annotations.OnDeleteAction.CASCADE;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "ornamental_plants")
public class OrnamentalPlant {

    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "ornamental_plant_sequence")
    @SequenceGenerator(name = "ornamental_plant_sequence", sequenceName = "ornamental_plant_sequence", allocationSize = 1)
    private Integer id;

    @JoinColumn(nullable = false)
    @Enumerated(value = STRING)
    private Status status;

    @OneToMany(mappedBy = "ornamentalPlant")
    @OnDelete(action = CASCADE)
    private final Set<Picture> urlPictures = new HashSet<>();

    @OneToOne(cascade = PERSIST)
    @OnDelete(action = CASCADE)
    @JoinColumn(nullable = false, foreignKey = @ForeignKey(name = "fk_identification"))
    private Identification identification;

    public OrnamentalPlant(Status status, Identification identification) {
        this.status = status;
        this.identification = identification;
    }

    public void addPicture(Picture picture) {
        urlPictures.add(picture);
    }

    public void addPictures(Collection<Picture> pictures) {
        urlPictures.addAll(pictures);
    }
}
