package com.starburst.controllers;

import com.starburst.entities.Candidate;
import com.starburst.entities.State;
import com.starburst.enums.Position;
import com.starburst.services.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by localadmin on 8/25/16.
 */
@RestController
@CrossOrigin
@RequestMapping("/states")
public class StateController {
    private StateService service;

    @Autowired
    public void setService(StateService service) {
        this.service = service;
    }

    @RequestMapping(path = {"", "/"}, method = RequestMethod.GET)
    public Page<State> index(@RequestParam(name = "page", required = false, defaultValue = "0") int page) {
        return this.service.findAll(page);
    }

    @RequestMapping(path = {"/{id}"}, method = RequestMethod.GET)
    public State show(@PathVariable int id) {
        return this.service.findOne(id);
    }

    @RequestMapping(path = {"", "/"}, method = RequestMethod.POST)
    public State create(@RequestBody State state) {
        return this.service.create(state);
    }

    @RequestMapping(path = {"/{id}"}, method = RequestMethod.DELETE)
    public void destroy(@PathVariable int id) {
        this.service.destroy(id);
    }

    @RequestMapping(path = {"/{id}"}, method = RequestMethod.PUT)
    public State update(@PathVariable int id, @RequestBody State state) {
        return this.service.update(id, state);
    }

    @RequestMapping(path = {"/{id}/countvotes/{position}"}, method = RequestMethod.GET)
    public List<Candidate> countVotes(@PathVariable int id, @PathVariable Position position) {
        return this.service.findAllVotesByStateIdAndPosition(id, position);
    }

    @RequestMapping(path = {"/findPresident"}, method = RequestMethod.GET)
    public Candidate findPresident() {
        return this.service.findPresident();
    }

    @RequestMapping(path = {"/{id}/findWinner/{pos}"}, method = RequestMethod.GET)
    public Candidate findWinner(@PathVariable int id, @PathVariable Position pos) {
        return this.service.findWinner(id, pos);
    }
}
