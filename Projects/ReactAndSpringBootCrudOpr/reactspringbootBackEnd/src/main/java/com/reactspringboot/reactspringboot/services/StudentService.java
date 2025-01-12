package com.reactspringboot.reactspringboot.services;

import com.reactspringboot.reactspringboot.entity.Student;
import com.reactspringboot.reactspringboot.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.management.AttributeNotFoundException;
import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(long id) throws AttributeNotFoundException {
        return studentRepository.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Student not found with id " + id));
    }
}
