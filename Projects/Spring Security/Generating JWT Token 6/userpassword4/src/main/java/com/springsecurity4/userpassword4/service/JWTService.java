package com.springsecurity4.userpassword4.service;

import org.springframework.stereotype.Service;

@Service
public class JWTService {

    public String generateToken() {
        return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkdlbmVyYXRlIHRoZSBUb2tlbiIsImlhdCI6MTUxNjIzOTAyMn0.PGSPjI3yOORoH-K3PFGvKld8AUIoWbeXSZdxqgbSjQA";
    }
}
