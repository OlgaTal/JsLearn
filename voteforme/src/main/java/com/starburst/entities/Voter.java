package com.starburst.entities;


import com.starburst.enums.Gender;
import com.starburst.enums.Party;
import com.starburst.enums.Position;
import com.starburst.enums.Race;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "voters")
public class Voter {
    private int id;
    private int version;
    private String name;
    private int age;
    private Race race;
    private Gender gender;
    private Date createdAt;
    private Date updatedAt;

    private State state;

    private List<Candidate> candidates;

    public Voter() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {this.updatedAt = new Date();}

    @Id
    @GeneratedValue
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    @Version
    public int getVersion() { return version; }
    public void setVersion(int version) {
        this.version = version;
    }

    @Column(nullable = false)
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "ENUM('M','F')")
    public Gender getGender() {
        return gender;
    }
    public void setGender(Gender gender) {
        this.gender = gender;
    }

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "ENUM('W','B','H')")
    public Race getRace() {
        return race;
    }
    public void setRace(Race race) {
        this.race = race;
    }

    @Column(name="age")
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Column(name="created_at", nullable=false, updatable = false)
    public Date getCreatedAt() { return createdAt; }
    public void setCreatedAt(Date createdAt) { this.createdAt = createdAt; }

    @Column(name="updated_at", nullable = false)
    public Date getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Date updatedAt) { this.updatedAt = updatedAt; }


    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "state_id")
    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinTable(name = "candidates_voters",
            joinColumns = @JoinColumn(name = "voter_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "candidate_id", referencedColumnName = "id"))
    public List<Candidate> getCandidates() {
        return candidates;
    }

    public void setCandidates(List<Candidate> candidates) {
        this.candidates = candidates;
    }
}
