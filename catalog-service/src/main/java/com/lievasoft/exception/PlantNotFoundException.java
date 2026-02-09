package com.lievasoft.exception;

public class PlantNotFoundException extends RuntimeException {

    public PlantNotFoundException(Long plantId) {
        super("Plant with ID %s not found".formatted(plantId));
    }
}
