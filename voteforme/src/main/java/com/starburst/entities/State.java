package com.starburst.entities;

import javax.persistence.*;


@Entity
@Table(name = "states")
public class State {
    private int id;
    private String name;
    private int electoralVotes;

    public State() {
    }

    public State(int id) {
        this();
        this.id = id;
    }

    @Id
    @GeneratedValue
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }


    @Column(nullable = false)
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }


    @Column(name="electoral_votes")
    public int getElectoralVotes() {
        return electoralVotes;
    }
    public void setElectoralVotes(int electoralVotes) {
        this.electoralVotes = electoralVotes;
    }



}

