package com.example.PizzaHub.controllers;

import com.example.PizzaHub.entities.Pizza;
import com.example.PizzaHub.entities.User;
import com.example.PizzaHub.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RequestMapping("/users")
@RestController
public class UserController extends BaseController<User,UserService> {

    @Autowired
    UserService userService;

//    @RequestMapping(value = "/{id}/pizzak", method = RequestMethod.GET)
//    public ResponseEntity<Iterable<Pizza>> getPizzak(@PathVariable Long id) {return rService.getPizzak(id); }
//
    @Secured({"ROLE_ADMIN"})
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> postUser(@RequestBody User user) { return rService.postUser(user); }

    @RequestMapping(path = "/register",method = RequestMethod.POST)
    public ResponseEntity<User> register(@RequestBody User user) {
        return userService.register(user);
    }

    @RequestMapping(path = "/login",method = RequestMethod.POST)
    public ResponseEntity<User> login(@RequestBody User user) {
        return rService.login(user);
    }
}
