package com.at.models;

import javax.persistence.*;

@Entity
@Table(name = "cars")
public class Car {
    private int id;
    private String make;
    private String model;
    private int year;
    private int personId;

    public Car() {
    }

    public Car(String make, String model, int year, int personId) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.personId = personId;
    }

    @Id
    @GeneratedValue
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    @Column(name = "person_id")
    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
    }
}
