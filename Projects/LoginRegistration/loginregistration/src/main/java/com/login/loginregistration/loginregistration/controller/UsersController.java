package com.login.loginregistration.loginregistration.controller;

import com.login.loginregistration.loginregistration.entity.User;
import com.login.loginregistration.loginregistration.request.LoginRequest;
import com.login.loginregistration.loginregistration.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
//@CrossOrigin(origins = "http://localhost:3000")
public class UsersController {
    @Autowired
    UserService userService;

    @PostMapping("/addUser")

    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @PostMapping("/loginUser")

    public Boolean loginUser(@RequestBody LoginRequest loginRequest) {
        return userService.loginUser(loginRequest);

    }

}
