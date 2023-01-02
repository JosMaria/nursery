package com.fdryt.nursery.service.impl;

import com.fdryt.nursery.domain.News;
import com.fdryt.nursery.dto.CreateNewsDTO;
import com.fdryt.nursery.dto.NewsResponseDTO;
import com.fdryt.nursery.repository.NewsRepository;
import com.fdryt.nursery.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class NewsServiceImpl implements NewsService {

    private final NewsRepository repository;

    @Override
    public Boolean create(CreateNewsDTO payload) {
        repository.save(dtoToEntity(payload));
        return true;
    }

    private News dtoToEntity(CreateNewsDTO dto) {
        News news = new News();
        news.setTitle(dto.getTitle());
        news.setDescription(dto.getDescription());
        return news;
    }

    @Override
    public List<NewsResponseDTO> fetch() {
        return repository.findAll()
                .stream()
                .map(this::entityToDTO)
                .toList();
    }

    private NewsResponseDTO entityToDTO(News news) {
        NewsResponseDTO dto = new NewsResponseDTO();
        dto.setTitle(news.getTitle());
        dto.setDescription(news.getDescription());
        return dto;
    }
}
