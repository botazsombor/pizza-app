package com.example.PizzaHub.services;

import com.example.PizzaHub.entities.Rendeles;
import com.example.PizzaHub.repositories.RendelesRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class RendelesService extends BaseService<Rendeles, RendelesRepository> {

    public ResponseEntity<Rendeles> postRendeles(Rendeles r) {
        System.out.println(r);
        System.out.println("Itt lehet feldolgozni.");
        return ResponseEntity.ok(rRepository.save(r));
    }

}
