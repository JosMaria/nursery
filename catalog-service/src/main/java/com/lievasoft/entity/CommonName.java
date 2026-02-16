package com.lievasoft.entity;

import com.lievasoft.dto.plant.CommonNameCreateDTO;
import jakarta.persistence.*;

@Entity
@Table(name = "common_names")
public class CommonName {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plantId", nullable = false)
    private Plant plant;

    @Column(nullable = false)
    private String name;

    @Enumerated(value = EnumType.STRING)
    private Country country;

    private String place;

    public CommonName() {
    }

    public CommonName(CommonNameCreateDTO commonNameCreateDTO) {
        this.name = commonNameCreateDTO.name();
        this.country = commonNameCreateDTO.country();
        this.place = commonNameCreateDTO.place();
    }

    public void setPlant(Plant plant) {
        this.plant = plant;
    }
}
