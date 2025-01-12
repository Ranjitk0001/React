package com.reactspringboot.reactspringboot.entity;


import jakarta.persistence.*;
import lombok.Data;

//@Data
@Entity
    @Table(name ="student")
    public class Student {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;
        @Column(name="student_name")
        private String name;
        private int age;
        @Column(name="department")
        private String dept;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }
}
