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
@Table(name = "feltetek")
@Data
public class Feltet extends BaseHozzatevo implements Serializable {

    @JsonIgnore
    @ManyToMany(targetEntity = Pizza.class, mappedBy = "feltetek")
    protected List<Pizza> pizzak = new ArrayList<>();

}
