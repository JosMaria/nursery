package com.lievasoft.resource;

import com.lievasoft.dto.PlantCreateDto;
import com.lievasoft.service.PlantService;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

import java.net.URI;

@Path("/api/v1/plants")
public class PlantResource {

    private final PlantService plantService;

    public PlantResource(PlantService plantService) {
        this.plantService = plantService;
    }

    @POST
    public Response create(PlantCreateDto payload) {
        var plantResponseCreateDto = plantService.create(payload);
        Long generatedId = plantResponseCreateDto.id();
        URI location = URI.create("/api/v1/plants/" + generatedId);
        return Response.created(location)
                .entity(plantResponseCreateDto)
                .build();
    }
}
