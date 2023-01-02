package com.fdryt.nursery.controller;

import com.fdryt.nursery.dto.CreateNewsDTO;
import com.fdryt.nursery.dto.NewsResponseDTO;
import com.fdryt.nursery.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class NewsController {

    private final NewsService service;

    @GetMapping
    public ResponseEntity<List<NewsResponseDTO>> fetch() {
        return ResponseEntity.ok(service.fetch());
    }

    @PostMapping
    public ResponseEntity<Boolean> create(@RequestBody CreateNewsDTO payload) {
        return new ResponseEntity<>(service.create(payload), HttpStatus.CREATED);
    }
}
