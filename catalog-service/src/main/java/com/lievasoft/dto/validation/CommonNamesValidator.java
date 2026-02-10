package com.lievasoft.dto.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.List;
import java.util.Objects;

public class CommonNamesValidator implements ConstraintValidator<CommonNamesValid, List<CommonNameDto>> {

    @Override
    public boolean isValid(List<CommonNameDto> dtos, ConstraintValidatorContext context) {
        boolean isValid = true;
        var index = 0;

        while (isValid && index < dtos.size()) {
            var commonNameDto = dtos.get(index);
            String name = commonNameDto.name();

            if (Objects.isNull(name) || name.isBlank())
                isValid = false;

            index++;
        }
        return false;
    }
}
