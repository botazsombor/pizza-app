package com.example.PizzaHub.controllers;

import com.example.PizzaHub.entities.Alap;
import com.example.PizzaHub.entities.Rendeles;
import com.example.PizzaHub.services.RendelesService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/rendelesek")
@RestController
public class RendelesController extends BaseController<Rendeles, RendelesService> {

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> postRendeles(@RequestBody Rendeles rendeles) { return rService.postRendeles(rendeles); }
}
