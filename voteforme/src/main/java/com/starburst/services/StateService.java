package com.starburst.services;

import com.starburst.entities.Candidate;
import com.starburst.entities.State;
import com.starburst.enums.Party;
import com.starburst.enums.Position;
import com.starburst.repositories.IStateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by localadmin on 8/25/16.
 */

@Service
public class StateService {
    private IStateRepository repository;

    @Autowired
    public void setRepository(IStateRepository repository) {this.repository = repository;}

    public Page<State> findAll(int page) {
        PageRequest pr = new PageRequest(page, 3);
        return this.repository.findAll(pr);
    }

    public State findOne(int id) {
        return this.repository.findOne(id);
    }

    public State create(State s) {
        return this.repository.save(s);
    }

    public void destroy(int id) {
        this.repository.delete(id);
    }

    public State update(int id, State s) {
        State state = this.repository.findOne(id);
        state.setName(s.getName());
        state.setElectoralVotes(s.getElectoralVotes());
        return this.repository.save(state);
    }

    public List<Candidate> findAllVotesByStateIdAndPosition(int id, Position position) {
        return this.repository.findAllVotesbyStateAndPosition(id, position);
    }

    public Candidate findPresident() {
        // 1. get all states
        List<State> states = (List<State>) repository.findAll();

        // 2. for each state aggregate voters for candidates
        int electoralDemocrat = 0;
        int electoralRepublican = 0;

        for (State s : states) {
            if (s.getId() == -99) { continue; }

            int rVotes = repository.countAllVotesByStatePositionAndParty(s.getId(), Position.PRESIDENT, Party.R);
            int dVotes = repository.countAllVotesByStatePositionAndParty(s.getId(), Position.PRESIDENT, Party.D);

            // 4. if D > R dcount += state.ev, else rcount += state.ev
            if (dVotes > rVotes) {
                electoralDemocrat += s.getElectoralVotes();
            } else if (rVotes > dVotes) {
                electoralRepublican += s.getElectoralVotes();
            } else {
                electoralDemocrat += s.getElectoralVotes() / 2;
                electoralRepublican += s.getElectoralVotes() / 2;
            }

            if (electoralDemocrat > 270 || electoralRepublican > 270) {
                break;
            }
        }
        // 3. if Dcount > Rcount return D, else R

        if (electoralDemocrat > electoralRepublican) {
            return this.repository.findCandidateByParty(Party.D, Position.PRESIDENT);
        } else if (electoralDemocrat < electoralRepublican) {
            return this.repository.findCandidateByParty(Party.R, Position.PRESIDENT);
        }
        Candidate c = new Candidate();
        c.setName("Sorry, there was no winner! D " + electoralDemocrat + " : R " + electoralRepublican);
        return c;
    }

    public Candidate findWinner(int stateId, Position position) {
        if (stateId == -99) {
            Candidate c = new Candidate();
            c.setName("State invalid: " + stateId);
            return c;
        }

        int rVotes = repository.countAllVotesByStatePositionAndParty(stateId, position, Party.R);
        int dVotes = repository.countAllVotesByStatePositionAndParty(stateId, position, Party.D);

        if (dVotes > rVotes) {
            return repository.findWinnerByStateAndPositionAndParty(stateId, position, Party.D);
        } else if (rVotes > dVotes) {
            return repository.findWinnerByStateAndPositionAndParty(stateId, position, Party.R);
        }

        Candidate c = new Candidate();
        c.setName("Sorry, there was no winner! D " + dVotes + " : R " + rVotes);
        return c;
    }



}
