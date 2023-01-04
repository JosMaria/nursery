package com.fdryt.nursery.problem.exceptions;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Map;

@Getter
@RequiredArgsConstructor
public class ObjectNotValidException extends RuntimeException {

    private final Map<String, String> errorMessages;
}
