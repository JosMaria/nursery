package com.fdryt.nursery.controller;

import com.fdryt.nursery.dto.IdentificationResponseDTO;
import com.fdryt.nursery.dto.ProductResponseDTO;
import com.fdryt.nursery.service.OrnamentalPlantService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/nursery")
public class OrnamentalPlantController {

    private final OrnamentalPlantService ornamentalPlantService;

    @GetMapping("/identifications")
    public ResponseEntity<List<IdentificationResponseDTO>> findAllIdentifications() {
        return ResponseEntity.ok(ornamentalPlantService.findAllIdentifications());
    }

    @GetMapping("/products")
    public ResponseEntity<List<ProductResponseDTO>> findOrnamentalPlants(@PageableDefault(size = 12) Pageable pageable) {
        return ResponseEntity.ok(ornamentalPlantService.findOrnamentalPlants(pageable));
    }
}
