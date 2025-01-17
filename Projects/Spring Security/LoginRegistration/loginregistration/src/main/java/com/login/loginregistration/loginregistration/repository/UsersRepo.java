package com.login.loginregistration.loginregistration.repository;

import com.login.loginregistration.loginregistration.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepo extends JpaRepository<User, String> {
}
