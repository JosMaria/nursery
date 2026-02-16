package com.lievasoft.entity;

import com.lievasoft.dto.plant.CommonNameCreateDTO;
import com.lievasoft.dto.request.CommonNameDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

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

    public CommonName(CommonNameDto commonNameDto) {
        this.name = commonNameDto.name();
        this.country = commonNameDto.country();
        this.place = commonNameDto.place();
    }

    public void setPlant(Plant plant) {
        this.plant = plant;
    }
}
