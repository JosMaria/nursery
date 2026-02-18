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
    @JoinColumn(name = "plant_id", nullable = false)
    private Plant plant;

    @Column(nullable = false)
    private String name;

    @Enumerated(value = EnumType.STRING)
    private Country country;

    private String place;

    @Column(name = "is_selected")
    private boolean isSelected;

    public CommonName() {
    }

    public CommonName(CommonNameCreateDTO commonNameCreateDTO) {
        this.name = commonNameCreateDTO.name();
        this.country = commonNameCreateDTO.country();
        this.place = commonNameCreateDTO.place();
        this.isSelected = commonNameCreateDTO.isSelected();
    }

    public void setPlant(Plant plant) {
        this.plant = plant;
    }
}
