package com.fdryt.nursery.service;

import com.fdryt.nursery.dto.IdentificationResponseDTO;

import java.util.List;

public interface OrnamentalPlantService {

    List<IdentificationResponseDTO> findAllIdentifications();
}
