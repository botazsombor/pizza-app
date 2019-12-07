package com.example.PizzaHub.entities;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "rendelesek")
@EqualsAndHashCode(callSuper = true)
public class Rendeles extends BaseEntity {

    @ManyToOne(targetEntity = User.class)
    @JoinColumn
    private User user;

    @ManyToMany(targetEntity = Pizza.class)
    @JoinTable(joinColumns = @JoinColumn(name = "pizza_id"), inverseJoinColumns = @JoinColumn(name = "rendeles_id"))
    private List<Pizza> pizzak = new ArrayList<>();
}
