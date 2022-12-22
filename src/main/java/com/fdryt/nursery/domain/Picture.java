package com.fdryt.nursery.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "pictures")
public class Picture {

    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "picture_sequence")
    @SequenceGenerator(name = "picture_sequence", sequenceName = "picture_sequence", allocationSize = 1)
    private Integer id;

    @Column(nullable = false)
    private String urlName;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_ornamental_plant"))
    private OrnamentalPlant ornamentalPlant;

    public Picture(String urlName) {
        this.urlName = urlName;
    }
}