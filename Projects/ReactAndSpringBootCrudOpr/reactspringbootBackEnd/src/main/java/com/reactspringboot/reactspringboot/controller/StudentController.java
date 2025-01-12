package com.reactspringboot.reactspringboot.controller;

import com.reactspringboot.reactspringboot.entity.Student;
import com.reactspringboot.reactspringboot.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.List;

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

    @GetMapping("/getStudents")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @GetMapping("/studentById/{id}")
    public ResponseEntity<Student> studentById(@PathVariable long id) throws AttributeNotFoundException {
        Student student = studentService.getStudentById(id);
        return ResponseEntity.ok(student);
    }

    @PutMapping("/updateStudent/{id}")
    public ResponseEntity<Student> updateStudentC(@PathVariable long id, @RequestBody Student updatedStudent) throws AttributeNotFoundException {
        Student savedStudent = studentService.updateStudent(id, updatedStudent);
        return ResponseEntity.ok(savedStudent);
    }
}
