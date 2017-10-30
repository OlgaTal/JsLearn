package com.starburst.controllers;

import com.starburst.entities.Candidate;
import com.starburst.entities.Voter;
import com.starburst.services.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

/**
 * Created by localadmin on 8/25/16.
 */
@RestController
@CrossOrigin
@RequestMapping("/candidates")
public class CandidateController {
    private CandidateService service;

    @Autowired
    public void setService(CandidateService service) {
        this.service = service;
    }

    @RequestMapping(path = {"", "/"}, method = RequestMethod.GET)
    public Page<Candidate> index(@RequestParam(name = "page", required = false, defaultValue = "0") int page) {
        return this.service.findAll(page);
    }

    @RequestMapping(path = {"/{id}/voters"}, method = RequestMethod.GET)
    public Page<Voter> movies(@PathVariable int id, @RequestParam(name = "page", required = false, defaultValue = "0") int page) {
        return this.service.findAllVotersByCandidateId(id, page);
    }

//    @RequestMapping(path = {"/{id}/actors"}, method = RequestMethod.GET)
//    public Page<Actor> actors(@PathVariable int id, @RequestParam(name = "page", required = false, defaultValue = "0") int page) {
//        return this.service.findAllActorsByCandidateId(id, page);
//    }

    @RequestMapping(path = {"/{id}"}, method = RequestMethod.GET)
    public Candidate show(@PathVariable int id) {
        return this.service.findOne(id);
    }

    @RequestMapping(path = {"", "/"}, method = RequestMethod.POST)
    public Candidate create(@RequestBody Candidate state) {
        return this.service.create(state);
    }

    @RequestMapping(path = {"/{id}"}, method = RequestMethod.DELETE)
    public void destroy(@PathVariable int id) {
        this.service.destroy(id);
    }

    @RequestMapping(path = {"/{id}"}, method = RequestMethod.PUT)
    public Candidate update(@PathVariable int id, @RequestBody Candidate state) {
        return this.service.update(id, state);
    }
}
