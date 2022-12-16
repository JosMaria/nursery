package com.fdryt.nursery.service.impl;

import com.fdryt.nursery.dto.IdentificationResponseDTO;
import com.fdryt.nursery.repository.OrnamentalPlantRepository;
import com.fdryt.nursery.service.OrnamentalPlantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class OrnamentalPlantServiceImpl implements OrnamentalPlantService {

    private final OrnamentalPlantRepository repository;

    @Override
    public List<IdentificationResponseDTO> findAllIdentifications() {
        return null;
    }
}
