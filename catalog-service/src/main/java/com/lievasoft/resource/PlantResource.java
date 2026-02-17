package com.lievasoft.resource;

import com.lievasoft.dto.plant.PlantCreateDTO;
import com.lievasoft.resource.validator.PlantValidator;
import com.lievasoft.service.PlantService;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;
import org.jboss.resteasy.reactive.RestPath;

import java.net.URI;

@Path("/api/v1/plants")
public class PlantResource {

    private final PlantService plantService;
    private final PlantValidator plantValidator;

    public PlantResource(PlantService plantService, PlantValidator plantValidator) {
        this.plantService = plantService;
        this.plantValidator = plantValidator;
    }

    @POST
    public Response create(PlantCreateDTO plantCreateDTO) {
        plantValidator.validateCreation(plantCreateDTO);
        var plantCreateResponse = plantService.create(plantCreateDTO);
        URI location = URI.create("/api/v1/plants/" + plantCreateResponse.id());
        return Response.created(location)
                .entity(plantCreateResponse)
                .build();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@RestPath("id") Long plantId) {
        var plantResponse = plantService.delete(plantId);
        return Response.ok(plantResponse).build();
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
