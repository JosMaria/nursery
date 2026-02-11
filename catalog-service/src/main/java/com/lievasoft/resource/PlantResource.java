package com.lievasoft.resource;

import com.lievasoft.dto.PlantCreateDto;
import com.lievasoft.dto.PlantCreateDtoV2;
import com.lievasoft.service.PlantService;
import jakarta.validation.Valid;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;
import org.jboss.resteasy.reactive.RestPath;

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

    @POST
    @Path("/v2")
    public Response createV2(@Valid PlantCreateDtoV2 payload) {
        var plantResponseCreateDto = plantService.createV2(payload);
        URI location = URI.create("/api/v1/plants/" + plantResponseCreateDto.id());
        return Response.created(location)
                .entity(plantResponseCreateDto)
                .build();
    }

    @GET
    public Response fetchPlantCards() {
        var response = plantService.fetchPlantCards();
        return Response.ok(response).build();
    }

    @GET
    @Path("/details/{id}")
    public Response fetchPlantDetailsById(@RestPath("id") Long plantId) {
        var response = plantService.fetchPlantDetailsById(plantId);
        return Response.ok(response).build();
    }
}
