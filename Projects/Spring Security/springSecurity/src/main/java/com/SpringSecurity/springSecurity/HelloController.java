package com.SpringSecurity.springSecurity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {
    @GetMapping("/spring")
    public String  SpringSecurity() {
        return "Welcome to Spring Security But Without using Security . Only web spring , Spring web tool";
    }
}
