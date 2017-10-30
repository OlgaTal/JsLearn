package com.starburst.entities;


import com.starburst.enums.Party;
import com.starburst.enums.Position;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "candidates")
public class Candidate {
    private int id;
    private int version;
    private String name;
    private Party party;
    private Position position;
    private Date createdAt;
    private Date updatedAt;

    private State state;

    public Candidate() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    public Candidate(int id) {
        this();
        this.id = id;
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
    @Column(columnDefinition = "ENUM('D','R')")
    public Party getParty() { return party;}
    public void setParty(Party party) { this.party = party;}

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "ENUM('PRESIDENT','GOVERNOR','SENATOR')")
    public Position getPosition() { return position; }
    public void setPosition(Position position) {
        this.position = position;
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
}
