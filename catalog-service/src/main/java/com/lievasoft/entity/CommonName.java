package com.lievasoft.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "common_names")
public class CommonName {

    @Id
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plantId", nullable = false)
    private Plant plantId;

    @Enumerated(value = EnumType.STRING)
    private Country country = Country.BOLIVIA;

    private String place;
}
