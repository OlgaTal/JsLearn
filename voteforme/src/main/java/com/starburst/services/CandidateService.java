package com.starburst.services;

import com.starburst.entities.Candidate;
import com.starburst.entities.Voter;
import com.starburst.repositories.ICandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

/**
 * Created by localadmin on 8/25/16.
 */

@Service
public class CandidateService {
    private ICandidateRepository repository;

    @Autowired
    public void setRepository(ICandidateRepository repository) {this.repository = repository;}

    public Page<Candidate> findAll(int page) {
        PageRequest pr = new PageRequest(page, 3);
        return this.repository.findAll(pr);
    }

    public Page<Voter> findAllVotersByCandidateId(int id, int page) {
        PageRequest pr = new PageRequest(page, 3);
        return this.repository.findAllVotersByCandidateId(id, pr);
    }

//    public Page<Actor> findAllActorsByCandidateId(int id, int page) {
//        PageRequest pr = new PageRequest(page, 3);
//        return this.repository.findAllActorsByCandidateId(id, pr);
//    }

    public Candidate findOne(int id) {
        return this.repository.findOne(id);
    }

    public Candidate create(Candidate c) {
        return this.repository.save(c);
    }

    public void destroy(int id) {
        this.repository.delete(id);
    }

    public Candidate update(int id, Candidate c) {
        Candidate candidate = this.repository.findOne(id);
        candidate.setName(c.getName());
        candidate.setParty(c.getParty());
        candidate.setPosition(c.getPosition());
        candidate.setState(c.getState());
        return this.repository.save(candidate);
    }




}
