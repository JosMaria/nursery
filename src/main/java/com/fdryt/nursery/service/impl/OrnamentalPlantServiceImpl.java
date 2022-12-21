package com.fdryt.nursery.service.impl;

import com.fdryt.nursery.domain.Family;
import com.fdryt.nursery.domain.Identification;
import com.fdryt.nursery.domain.OrnamentalPlant;
import com.fdryt.nursery.dto.IdentificationResponseDTO;
import com.fdryt.nursery.repository.OrnamentalPlantRepository;
import com.fdryt.nursery.service.OrnamentalPlantService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class OrnamentalPlantServiceImpl implements OrnamentalPlantService {

    private final OrnamentalPlantRepository repository;

    @Override
    public List<IdentificationResponseDTO> findAllIdentifications() {
        log.info("Fetching all the identifications");
        return repository.findAll()
                .stream()
                .map(this::entityToDTO)
                .toList();
    }

    private IdentificationResponseDTO entityToDTO(OrnamentalPlant ornamentalPlant) {
        Identification identification = ornamentalPlant.getIdentification();
        Family family = identification.getFamily();
        return new IdentificationResponseDTO(
                ornamentalPlant.getId(),
                identification.getCommonName(),
                identification.getScientificName(),
                identification.getFirstLetterLastname(),
                family != null ? family.getName() : null,
                ornamentalPlant.getStatus().name());
    }
}
