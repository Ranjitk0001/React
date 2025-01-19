package com.springsecurity4.userpassword4.controller;

import com.springsecurity4.userpassword4.modelEntity.Users;
import com.springsecurity4.userpassword4.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserService service;


    @PostMapping("/register")
    public Users register(@RequestBody Users user) {
        return service.register(user);

    }


    @PostMapping("/login")
    public String login(@RequestBody Users user) {
    System.out.println(user);
        return "success";
    }
}
