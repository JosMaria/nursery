package com.fdryt.nursery.service;

import com.fdryt.nursery.dto.IdentificationResponseDTO;
import com.fdryt.nursery.dto.ProductResponseDTO;

import java.util.List;

public interface OrnamentalPlantService {

    List<IdentificationResponseDTO> findAllIdentifications();

    List<ProductResponseDTO> findOrnamentalPlants();
}
