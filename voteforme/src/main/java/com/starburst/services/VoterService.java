package com.starburst.services;

import com.starburst.entities.Candidate;
import com.starburst.entities.Voter;
import com.starburst.repositories.IVoterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

/**
 * Created by localadmin on 8/25/16.
 */

@Service
public class VoterService {
    private IVoterRepository repository;

    @Autowired
    public void setRepository(IVoterRepository repository) {this.repository = repository;}

    public Page<Voter> findAll(int page) {
        PageRequest pr = new PageRequest(page, 3);
        return this.repository.findAll(pr);
    }
//
//    public Page<Movie> findAllMoviesByVoterId(int id, int page) {
//        PageRequest pr = new PageRequest(page, 3);
//        return this.repository.findAllActorsByVoterId(id, pr);
//    }

    public Voter findOne(int id) {
        return this.repository.findOne(id);
    }

    public Voter create(Voter v) {
        return this.repository.save(v);
    }

    public void destroy(int id) {
        this.repository.delete(id);
    }

    public Voter update(int id, Voter v) {
        Voter voter = this.repository.findOne(id);
        voter.setName(v.getName());
        voter.setAge(v.getAge());
        voter.setRace(v.getRace());
        voter.setState(v.getState());
        return this.repository.save(voter);
    }

    public Voter vote(int voterId, int candidateId) {
        // TODO: 8/25/16 if candidate state not voter state and not -99, don't allow vote
        // TODO: 8/25/16 if voter.candidate.postition == candidate.position dont allow vote
        Voter voter = this.repository.findOne(voterId);
        voter.getCandidates().add(new Candidate(candidateId));

        return this.repository.save(voter);
    }
}
