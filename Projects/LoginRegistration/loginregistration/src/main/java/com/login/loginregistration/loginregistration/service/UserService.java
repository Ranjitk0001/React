package com.login.loginregistration.loginregistration.service;

import com.login.loginregistration.loginregistration.entity.User;
import com.login.loginregistration.loginregistration.repository.UsersRepo;
import com.login.loginregistration.loginregistration.request.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UsersRepo usersRepo;

    public User addUser(User user) {

        return usersRepo.save(user);

    }


    public Boolean loginUser(LoginRequest loginRequest) {

        Optional<User> user = usersRepo.findById(loginRequest.getUserId());
        User user1 = user.get();

//        if(user1 == null) {
//            return false;
//        }
        if(user1 == null || !user1.getPassword().equals(loginRequest.getPassword())) {
            return false;
        }

        return true;

    }
}
