package com.example.PizzaHub.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "alapok")
@Data
public class Alap extends BaseHozzatevo implements Serializable {

    @JsonIgnore
    @OneToMany(targetEntity = Pizza.class, mappedBy = "alap")
    private List<Pizza> pizzak = new ArrayList<>();
}
