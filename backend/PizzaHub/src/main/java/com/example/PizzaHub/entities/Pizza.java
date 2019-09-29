package com.example.PizzaHub.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Entity
@Data
@Table(name = "pizzak")
@EqualsAndHashCode(callSuper = true)
public class Pizza extends BaseHozzatevo implements Serializable {

    @ManyToOne(targetEntity = Teszta.class)
    @JoinColumn
    private Teszta teszta;

    @ManyToOne(targetEntity = Alap.class)
    @JoinColumn
    private Alap alap;

    @ManyToMany(targetEntity = Feltet.class)
    @JoinTable(joinColumns = @JoinColumn(name = "pizza_id"), inverseJoinColumns = @JoinColumn(name = "feltet_id"))
    private List<Feltet> feltetek = new ArrayList<>();

    @ManyToMany(targetEntity = User.class, mappedBy = "pizzak")
    private List<User> users = new ArrayList<>();



}
