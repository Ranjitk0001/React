package com.SpringSecurity.springSecurity;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {
    @GetMapping("/spring")
    public String  SpringSecurity(HttpServletRequest request) {
        return "Welcome to Spring Security But Without using Security . Only web spring , Spring web tool" +
                "json web token id is:-  "+request.getSession().getId();
    }
}
