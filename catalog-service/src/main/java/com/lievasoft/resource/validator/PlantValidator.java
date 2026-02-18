package com.lievasoft.resource.validator;

import com.lievasoft.dto.plant.CommonNameCreateDTO;
import com.lievasoft.dto.plant.PlantCreateDTO;
import com.lievasoft.entity.Country;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@ApplicationScoped
public class PlantValidator {

    public void validateCreation(PlantCreateDTO plantCreateDTO) {
        if (isScientificNameInvalid(plantCreateDTO.scientificName()))
            throw new IllegalArgumentException("scientific name must not be null, empty or blank");

        Collection<CommonNameCreateDTO> commonNamesDTO = plantCreateDTO.commonNamesDTO();
        if (isCollectionNullOrEmpty(commonNamesDTO))
            throw new IllegalArgumentException("common names collection must not be null or empty");

        Collection<String> names = commonNamesDTO.stream().map(CommonNameCreateDTO::name).toList();
        if (hasSomeNameInvalid(names))
            throw new IllegalArgumentException("In common names exists values null, empty or blank");

        List<Country> countries = commonNamesDTO.stream().map(CommonNameCreateDTO::country).toList();
        if (hasDuplicateCountries(countries))
            throw new IllegalArgumentException("countries of the common names must be uniques");

        List<Boolean> selections = commonNamesDTO.stream().map(CommonNameCreateDTO::isSelected).toList();
        if (existsMoreOneSelected(selections))
            throw new IllegalArgumentException("It must has zero or one values in selection");
    }

    private boolean isScientificNameInvalid(String scientificName) {
        return scientificName == null || scientificName.isBlank();
    }

    private <T> boolean isCollectionNullOrEmpty(Collection<T> collection) {
        return collection == null || collection.isEmpty();
    }

    private boolean hasSomeNameInvalid(Collection<String> names) {
        return names.stream().anyMatch(name -> name == null || name.isBlank());
    }

    private boolean hasDuplicateCountries(List<Country> countries) {
        Set<Country> obtainedCountries = new HashSet<>();
        var isRepeat = false;
        var index = 0;

        do {
            var country = countries.get(index);
            isRepeat = !obtainedCountries.add(country);
            index++;

        } while (!isRepeat && index < countries.size());

        return isRepeat;
    }

    private boolean existsMoreOneSelected(Collection<Boolean> selections) {
        long selectedCount = selections.stream()
                .filter(selectedValue -> selectedValue)
                .count();

        return selectedCount > 1;
    }
}
