package com.lievasoft.dto.request.validation;

import com.lievasoft.entity.Country;

public record CommonNameDto(
        String name,
        Country country,
        String place
) {
}
