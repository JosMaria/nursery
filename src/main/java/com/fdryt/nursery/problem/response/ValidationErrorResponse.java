package com.fdryt.nursery.problem.response;

import java.time.LocalDateTime;
import java.util.Map;

public record ValidationErrorResponse(
        String path,
        Map<String, String> errorMessages,
        LocalDateTime localDateTime) {}