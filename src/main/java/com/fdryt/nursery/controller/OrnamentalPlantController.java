package com.fdryt.nursery.controller;

import com.fdryt.nursery.dto.IdentificationResponseDTO;
import com.fdryt.nursery.service.OrnamentalPlantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/ornamental")
public class OrnamentalPlantController {

    private final OrnamentalPlantService service;

    @GetMapping
    public ResponseEntity<List<IdentificationResponseDTO>> findAllIdentifications() {
        return ResponseEntity.ok(service.findAllIdentifications());
    }
}
