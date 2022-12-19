package com.fdryt.nursery.domain;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import static jakarta.persistence.EnumType.STRING;

@NoArgsConstructor
@Entity
@Table(name = "classifications")
public class Classification {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "classification_sequence")
    @SequenceGenerator(name = "classification_sequence", sequenceName = "classification_sequence", allocationSize = 1)
    private Integer id;

    @Column(unique = true, length = 50)
    @Enumerated(STRING)
    private ClassificationByUtility classificationByUtility;

    public Classification(ClassificationByUtility classificationByUtility) {
        this.classificationByUtility = classificationByUtility;
    }
}
