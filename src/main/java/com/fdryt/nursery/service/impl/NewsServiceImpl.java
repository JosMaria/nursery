package com.fdryt.nursery.service.impl;

import com.fdryt.nursery.domain.News;
import com.fdryt.nursery.dto.CreateNewsDTO;
import com.fdryt.nursery.dto.NewsResponseDTO;
import com.fdryt.nursery.repository.NewsRepository;
import com.fdryt.nursery.service.NewsService;
import com.fdryt.nursery.validators.ObjectsValidator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@Slf4j
@Service
public class NewsServiceImpl implements NewsService {

    private final NewsRepository news;
    private final ObjectsValidator<CreateNewsDTO> createNewsValidator;
    private final ModelMapper newsMapper;

    @Override
    public NewsResponseDTO create(CreateNewsDTO payload) {
        createNewsValidator.validate(payload);

        News newsMapped = newsMapper.map(payload, News.class);
        News newsPersisted = news.save(newsMapped);

        return newsMapper.map(newsPersisted, NewsResponseDTO.class);
    }

    @Override
    public List<NewsResponseDTO> fetch() {
        return news.findAllByStartDateAndEndDateBetween(LocalDateTime.now())
                .stream()
                .map(news -> newsMapper.map(news, NewsResponseDTO.class))
                .toList();
    }
}
