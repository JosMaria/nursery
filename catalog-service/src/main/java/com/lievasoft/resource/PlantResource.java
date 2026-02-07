package com.lievasoft.resource;

import com.lievasoft.dto.PlantCreateDto;
import com.lievasoft.service.PlantService;
import jakarta.ws.rs.GET;
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
        var response = plantService.create(payload);
        URI location = URI.create("/api/v1/plants/" + response.id());
        return Response.created(location)
                .entity(response)
                .build();
    }

    @GET
    public Response fetchPlantCards() {
        var response = plantService.fetchPlantCards();
        return Response.ok(response).build();
    }

    @GET
    @Path("/{id}")
    public Response fetchPlantDetailsById(Long id) {
        return Response.ok().build();
    }
}
