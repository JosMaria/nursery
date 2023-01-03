package com.fdryt.nursery.service.impl;

import com.fdryt.nursery.domain.News;
import com.fdryt.nursery.dto.CreateNewsDTO;
import com.fdryt.nursery.dto.NewsResponseDTO;
import com.fdryt.nursery.repository.NewsRepository;
import com.fdryt.nursery.service.NewsService;
import com.fdryt.nursery.validators.ObjectsValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class NewsServiceImpl implements NewsService {

    private final NewsRepository repository;
    private final ObjectsValidator<CreateNewsDTO> validator;

    @Override
    public String create(CreateNewsDTO payload) {
        Set<String>  violations = validator.validate(payload);
        if (!violations.isEmpty()) {
            return String.join("\n", violations);
        }

        News newsMapped = dtoToEntity(payload);

        repository.save(newsMapped);
        return "true";
    }

    private News dtoToEntity(CreateNewsDTO dto) {
        News news = new News();
        news.setDescription(dto.title());
        news.setTitle(dto.description());
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
