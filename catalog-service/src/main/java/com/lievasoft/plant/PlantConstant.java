package com.lievasoft.plant;

public class PlantConstant {

    public static final String FETCH_PLANT_CARDS_NAME = "Plant.fetchPlantCards";
    public static final String FETCH_PLANT_CARDS_QUERY = """
                    SELECT common_name, scientific_name AS scientific
                    FROM plants
            """;

    public static final String FETCH_PLANT_DETAILS_NAME = "Plant.fetchPlantDetailsById";
    public static final String FETCH_PLANT_DETAILS_QUERY = """
                    SELECT id, common_name, scientific_name, is_available, updated_at
                    FROM plants
                    WHERE id = :id
            """;
}
