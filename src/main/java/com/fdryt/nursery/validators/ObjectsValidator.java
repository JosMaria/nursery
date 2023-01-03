package com.fdryt.nursery.validators;

import com.fdryt.nursery.problem.exceptions.ObjectNotValidException;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@Component
public class ObjectsValidator<T> {

    private final ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    private final Validator validator = factory.getValidator();

    public void validate(T objectToValidate) {
        Map<String, String> errorMessages = new HashMap<>();

        Set<ConstraintViolation<T>> violations = validator.validate(objectToValidate);
        if (!violations.isEmpty()) {
            violations.forEach(violation -> errorMessages.put(violation.getPropertyPath().toString(), violation.getMessage()));
            throw new ObjectNotValidException(errorMessages);
        }
    }
}
