package com.lievasoft.dto.request;

import com.lievasoft.entity.Country;

public record CommonNameDto(
        String name,
        Country country,
        String place
) {

    public CommonNameDto {
        name = name.toLowerCase();
    }
}
