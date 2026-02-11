package com.lievasoft.resource;

import com.lievasoft.dto.request.CommonNameDto;
import com.lievasoft.dto.request.PlantCreateRequest;
import com.lievasoft.entity.Country;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@ApplicationScoped
public class PlantCreateValidator {

    public void validate(PlantCreateRequest plantCreateRequest) {
        if (isScientificNameValid(plantCreateRequest.scientificName()))
            throw new IllegalArgumentException("scientific name must not be null, empty or blank");

        List<CommonNameDto> commonNameDtos = plantCreateRequest.commonNames();
        if (isCollectionNullOrEmpty(commonNameDtos))
            throw new IllegalArgumentException("common names list must not be null or empty");

        List<String> names = commonNameDtos.stream().map(CommonNameDto::name).toList();
        if (hasSomeNameInvalid(names))
            throw new IllegalArgumentException("In common names has some name repeat, name must be unique");

        if (hasDuplicateCountries(commonNameDtos))
            throw new IllegalArgumentException("countries of the common names must be uniques");
    }

    private boolean isScientificNameValid(String scientificName) {
        return scientificName == null || scientificName.isBlank();
    }

    private <T> boolean isCollectionNullOrEmpty(Collection<T> collection) {
        return collection == null || collection.isEmpty();
    }

    private boolean hasDuplicateCountries(List<CommonNameDto> commonNameDtos) {
        Set<Country> obtainedCountries = new HashSet<>();
        var isRepeat = false;
        var index = 0;

        while (!isRepeat && index < commonNameDtos.size()) {
            var commonNameDto = commonNameDtos.get(index);
            isRepeat = !obtainedCountries.add(commonNameDto.country());
            index++;
        }
        return isRepeat;
    }

    private boolean hasSomeNameInvalid(Collection<String> names) {
        return names.stream().anyMatch(name -> name == null || name.isBlank());
    }
}
