package com.lievasoft.plant;

public class PlantConstant {

    public static final String FETCH_PLANT_CARDS_NAME = "Plant.fetchPlantCards";
    public static final String FETCH_PLANT_CARDS_QUERY = """
                    SELECT common_name, scientific_name AS scientific
                    FROM plants
            """;

}
