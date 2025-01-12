package com.reactspringboot.reactspringboot.controller;

import com.reactspringboot.reactspringboot.entity.Student;
import com.reactspringboot.reactspringboot.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class StudentController {
    @Autowired
    private StudentService studentService;


    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody Student student) {
        if (student == null)
        { throw new RuntimeException("StudentService is not injected properly");}
//        System.out.println("Student Data :- ======"+student.toString());
        System.out.println("Received student data: " + student);
        Student savedStudent = studentService.addStudent(student);
        return studentService.addStudent(student);
    }
}
