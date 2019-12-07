package com.example.PizzaHub.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "users")
@Data
public class User extends BaseEntity implements Serializable {

    @NotNull
    @Column
    private String userName;

    @NotNull
    @Column
    private String password;

    @NotNull
    @Column
    private String emailAddress;

    @Column(nullable = false)
    private boolean enabled;

    @Column(nullable = false)
    private Role role;

    @OneToMany(targetEntity = Rendeles.class, mappedBy = "user")
    @JsonIgnore
    private List<Rendeles> rendelesek = new ArrayList<>();

}
