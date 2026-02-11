package com.lievasoft.resource;

import com.lievasoft.dto.request.PlantCreateRequest;
import com.lievasoft.service.PlantService;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;
import org.jboss.resteasy.reactive.RestPath;

import java.net.URI;

@Path("/api/v1/plants")
public class PlantResource {

    private final PlantService plantService;
    private final PlantCreateValidator validator;
    private final PlantCreateTransformer transformer;

    public PlantResource(PlantService plantService, PlantCreateValidator validator, PlantCreateTransformer transformer) {
        this.plantService = plantService;
        this.validator = validator;
        this.transformer = transformer;
    }

    @POST
    public Response create(PlantCreateRequest payload) {
        validator.validate(payload);
        var plantCreateDto = transformer.transform(payload);
        var plantResponseCreateDto = plantService.create(plantCreateDto);
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
