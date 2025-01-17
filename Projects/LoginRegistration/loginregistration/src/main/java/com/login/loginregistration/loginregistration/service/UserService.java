package com.login.loginregistration.loginregistration.service;

import com.login.loginregistration.loginregistration.entity.User;
import com.login.loginregistration.loginregistration.repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UsersRepo usersRepo;

    public User addUser(User user) {

        return usersRepo.save(user);

    }
}
