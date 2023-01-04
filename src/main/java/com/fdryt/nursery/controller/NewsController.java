package com.fdryt.nursery.controller;

import com.fdryt.nursery.dto.CreateNewsDTO;
import com.fdryt.nursery.dto.NewsResponseDTO;
import com.fdryt.nursery.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/nursery/news")
public class NewsController {

    private final NewsService newsService;

    @GetMapping
    public ResponseEntity<List<NewsResponseDTO>> fetch() {
        return ResponseEntity.ok(newsService.fetch());
    }

    @PostMapping
    public ResponseEntity<NewsResponseDTO> create(@RequestBody CreateNewsDTO payload) {
        return new ResponseEntity<>(newsService.create(payload), CREATED);
    }
}
