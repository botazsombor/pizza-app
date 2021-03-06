package com.example.PizzaHub.controllers;

import com.example.PizzaHub.entities.Pizza;
import com.example.PizzaHub.entities.Teszta;
import com.example.PizzaHub.services.TesztaService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequestMapping("/tesztak")
@RestController
public class TesztaController extends BaseController<Teszta,TesztaService> {

    @RequestMapping(value = "/{id}/pizzak", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Pizza>> getPizzak(@PathVariable Long id) { return rService.getPizzak(id); }

    @Secured({"ROLE_ADMIN"})
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> postTeszta(@RequestBody Teszta teszta) { return rService.postTeszta(teszta); }

}
