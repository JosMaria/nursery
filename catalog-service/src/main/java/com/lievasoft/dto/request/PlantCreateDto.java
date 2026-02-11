package com.lievasoft.dto.request;

import com.lievasoft.dto.request.validation.annotation.CommonNamesValid;
import com.lievasoft.dto.request.validation.order.SecondValidationOrder;

import java.util.List;


public record PlantCreateDto(

        String scientificName,

//        @CommonNamesValid(groups = SecondValidationOrder.class)
        List<CommonNameDto> commonNames,

        TaxonomyDto taxonomyDto
) {

//    @AssertTrue(message = "common names list must not be null or empty", groups = FirstValidationOrder.class)
//    public boolean isNotNullOrEmpty() {
//        return !(Objects.isNull(commonNames) || commonNames.isEmpty());
//    }
//
//    @AssertFalse(message = "countries of the common names must be uniques", groups = ThirdValidationOrder.class)
//    public boolean hasDuplicateCountries() {
//        Set<Country> obtainedCountries = new HashSet<>();
//        var isRepeat = false;
//        var index = 0;
//
//        while (!isRepeat && index < commonNames.size()) {
//            var commonNameDto = commonNames.get(index);
//            isRepeat = !obtainedCountries.add(commonNameDto.country());
//            index++;
//        }
//        return isRepeat;
//    }
}
