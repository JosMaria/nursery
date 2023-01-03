package com.fdryt.nursery.controller;

import com.fdryt.nursery.dto.CreateNewsDTO;
import com.fdryt.nursery.dto.NewsResponseDTO;
import com.fdryt.nursery.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/nursery/news")
public class NewsController {

    private final NewsService service;

    @GetMapping
    public ResponseEntity<List<NewsResponseDTO>> fetch() {
        return ResponseEntity.ok(service.fetch());
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody CreateNewsDTO payload) {
        return new ResponseEntity<>(service.create(payload), HttpStatus.CREATED);
    }
}
