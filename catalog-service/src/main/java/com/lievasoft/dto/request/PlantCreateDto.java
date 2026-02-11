package com.lievasoft.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.lievasoft.dto.request.validation.annotation.CommonNamesValid;
import com.lievasoft.dto.request.validation.order.FirstValidationOrder;
import com.lievasoft.dto.request.validation.order.SecondValidationOrder;
import com.lievasoft.dto.request.validation.order.ThirdValidationOrder;
import com.lievasoft.entity.Country;
import jakarta.validation.GroupSequence;
import jakarta.validation.constraints.AssertFalse;
import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.NotBlank;

import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@GroupSequence({
        PlantCreateDto.class,
        FirstValidationOrder.class,
        SecondValidationOrder.class,
        ThirdValidationOrder.class
})
public record PlantCreateDto(

        @JsonProperty("scientific_name")
        @NotBlank(message = "scientific name must not be null, empty or blank")
        String scientificName,

        @JsonProperty("common_names")
        @CommonNamesValid(groups = SecondValidationOrder.class)
        List<CommonNameDto> commonNames,

        @JsonProperty("taxonomy")
        TaxonomyDto taxonomyDto
) {

    @AssertTrue(message = "common names list must not be null or empty", groups = FirstValidationOrder.class)
    public boolean isNotNullOrEmpty() {
        return !(Objects.isNull(commonNames) || commonNames.isEmpty());
    }

    @AssertFalse(message = "countries of the common names must be uniques", groups = ThirdValidationOrder.class)
    public boolean hasDuplicateCountries() {
        Set<Country> obtainedCountries = new HashSet<>();
        var isRepeat = false;
        var index = 0;

        while (!isRepeat && index < commonNames.size()) {
            var commonNameDto = commonNames.get(index);
            isRepeat = !obtainedCountries.add(commonNameDto.country());
            index++;
        }
        return isRepeat;
    }
}
