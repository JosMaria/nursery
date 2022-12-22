package com.fdryt.nursery.service.impl;

import com.fdryt.nursery.dto.IdentificationResponseDTO;
import com.fdryt.nursery.dto.ProductResponseDTO;
import com.fdryt.nursery.repository.OrnamentalPlantRepository;
import com.fdryt.nursery.service.OrnamentalPlantService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class OrnamentalPlantServiceImpl implements OrnamentalPlantService {

    private final ModelMapper mapper;
    private final OrnamentalPlantRepository repository;

    @Override
    public List<IdentificationResponseDTO> findAllIdentifications() {
        log.info("Fetching all the identifications");
        return repository.findAll()
                .stream()
                .map(ornamentalPlant -> mapper.map(ornamentalPlant, IdentificationResponseDTO.class))
                .toList();
    }

    @Override
    public List<ProductResponseDTO> findOrnamentalPlants() {
        log.info("Fetching all the products");
        return repository.findAll()
                .stream()
                .map(ornamentalPlant -> mapper.map(ornamentalPlant, ProductResponseDTO.class))
                .toList();
    }
}
