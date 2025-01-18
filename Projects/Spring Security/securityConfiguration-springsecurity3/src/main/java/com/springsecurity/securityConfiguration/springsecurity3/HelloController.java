package com.springsecurity.securityConfiguration.springsecurity3;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {
    @GetMapping("/spring")
    public String  SpringSecurity(HttpServletRequest request) {
        return "securityConfiguration.springsecurity3. Only web spring , Spring web tool" +
                "json web token id is:-  "+request.getSession().getId();
    }
}
