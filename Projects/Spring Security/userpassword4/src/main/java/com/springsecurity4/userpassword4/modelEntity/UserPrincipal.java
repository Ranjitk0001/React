package com.springsecurity4.userpassword4.modelEntity;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;


public class UserPrincipal implements UserDetails {
    private Users user;

//    Constructor
    public UserPrincipal(Users user) {
        this.user = user;
    }

//UserDetails all method here
//user authority
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority("USER"));
    }

//    user.getPassword
    @Override
    public String getPassword() {
        return user.getPassword();
    }
//user.getUsername
    @Override
    public String getUsername() {
        return user.getUsername();
    }
//true
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

//    true
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
//true
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
//true;
    @Override
    public boolean isEnabled() {
        return true;
    }
}
