package com.fdryt.nursery.service.impl;

import com.fdryt.nursery.dto.IdentificationResponseDTO;
import com.fdryt.nursery.dto.ProductResponseDTO;
import com.fdryt.nursery.repository.OrnamentalPlantRepository;
import com.fdryt.nursery.service.OrnamentalPlantService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Slf4j
@Service
public class OrnamentalPlantServiceImpl implements OrnamentalPlantService {

    private final OrnamentalPlantRepository ornamentalPlantRepository;
    private final ModelMapper ornamentalPlantMapper;

    @Override
    public List<IdentificationResponseDTO> findAllIdentifications() {
        log.info("Fetching all the identifications");
        return ornamentalPlantRepository.findAll()
                .stream()
                .map(ornamentalPlant -> ornamentalPlantMapper.map(ornamentalPlant, IdentificationResponseDTO.class))
                .toList();
    }

    @Override
    public List<ProductResponseDTO> findOrnamentalPlants(Pageable pageable) {
        log.info("Fetching all the products");
        return ornamentalPlantRepository.findAllSortedByPriority(pageable)
                .stream()
                .map(ornamentalPlant -> ornamentalPlantMapper.map(ornamentalPlant, ProductResponseDTO.class))
                .toList();
    }
}
