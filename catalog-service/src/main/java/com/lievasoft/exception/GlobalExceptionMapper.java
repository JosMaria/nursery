package com.lievasoft.exception;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.core.Response;
import org.jboss.logging.Logger;
import org.jboss.resteasy.reactive.RestResponse;
import org.jboss.resteasy.reactive.server.ServerExceptionMapper;

@ApplicationScoped
public class GlobalExceptionMapper {

    private static final Logger LOG = Logger.getLogger(GlobalExceptionMapper.class);

    @ServerExceptionMapper
    public RestResponse<ErrorResponse> handlePlantNotFound(PlantNotFoundException e) {
        Response.Status notFound = Response.Status.NOT_FOUND;
        var errorResponse = new ErrorResponse(notFound.getReasonPhrase(), e.getMessage());
        LOG.error(e.getMessage());
        return RestResponse.status(notFound, errorResponse);
    }
}
