package com.example.PizzaHub.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "tesztak")
@Data
public class Teszta extends BaseHozzatevo implements Serializable {

    @JsonIgnore
    @OneToMany(targetEntity = Pizza.class, mappedBy = "teszta")
    private List<Pizza> pizzak = new ArrayList<>();
}
