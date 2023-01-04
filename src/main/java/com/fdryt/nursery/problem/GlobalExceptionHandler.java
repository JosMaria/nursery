package com.fdryt.nursery.problem;

import com.fdryt.nursery.problem.exceptions.ObjectNotValidException;
import com.fdryt.nursery.problem.response.ValidationErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ObjectNotValidException.class)
    public ResponseEntity<?> handleObjectNotValidException(ObjectNotValidException exception, HttpServletRequest request) {
        return ResponseEntity
                .badRequest()
                .body(new ValidationErrorResponse(request.getRequestURI(), exception.getErrorMessages(), LocalDateTime.now()));
    }
}
