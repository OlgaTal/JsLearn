package com.at.models;


import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "claims")
public class Claim {
    private int id;
    private Date claim_date;
    private Time claim_time;
    private String location;
    private String photo;
    private int carId;

    public Claim() {
    }



    @Id
    @GeneratedValue
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getClaim_date() {
        return claim_date;
    }

    public void setClaim_date(Date claim_date) {
        this.claim_date = claim_date;
    }

    public Time getClaim_time() {
        return claim_time;
    }

    public void setClaim_time(Time claim_time) {
        this.claim_time = claim_time;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    @Column(name = "car_id")
    public int getCarId() {
        return carId;
    }

    public void setCarId(int carId) {
        this.carId = carId;
    }
}
