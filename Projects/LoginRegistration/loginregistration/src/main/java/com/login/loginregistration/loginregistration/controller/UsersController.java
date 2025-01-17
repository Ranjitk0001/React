package com.login.loginregistration.loginregistration.controller;

import com.login.loginregistration.loginregistration.entity.User;
import com.login.loginregistration.loginregistration.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsersController {
    @Autowired
    UserService userService;

    @PostMapping("/addUser")

    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }
}
