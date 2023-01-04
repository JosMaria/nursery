package com.fdryt.nursery.service;

import com.fdryt.nursery.dto.CreateNewsDTO;
import com.fdryt.nursery.dto.NewsResponseDTO;

import java.util.List;

public interface NewsService {

    NewsResponseDTO create(CreateNewsDTO payload);

    List<NewsResponseDTO> fetch();
}
