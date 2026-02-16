package com.lievasoft.dto.plant;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.lievasoft.entity.Country;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record CommonNameCreateDTO(
        String name,
        Country country,
        String place
) {
}
