package com.lievasoft.dto.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.List;
import java.util.Objects;

public class CommonNamesValidator implements ConstraintValidator<CommonNamesValid, List<CommonNameDto>> {

    @Override
    public boolean isValid(List<CommonNameDto> dtos, ConstraintValidatorContext context) {
        context.disableDefaultConstraintViolation();

        String errorMessage = "cannot be null, empty or blank";
        var hasError = false;
        var index = 0;

        for (var commonNameDto : dtos) {
            if (isNameInvalid(commonNameDto.name())) {
                var fullMessage = "common_name[%d] %s".formatted(index, errorMessage);
                context.buildConstraintViolationWithTemplate(fullMessage).addConstraintViolation();
                hasError = true;
            }
            index++;
        }

        return !hasError;
    }

    private boolean isNameInvalid(String name) {
        return Objects.isNull(name) || name.isBlank();
    }
}
