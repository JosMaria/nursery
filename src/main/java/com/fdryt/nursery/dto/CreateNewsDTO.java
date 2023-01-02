package com.fdryt.nursery.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class CreateNewsDTO {

    private final String title;
    private final String description;
}
