package com.starburst.controllers;

import com.starburst.entities.Voter;
import com.starburst.services.CandidateService;
import com.starburst.services.VoterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

/**
 * Created by localadmin on 8/25/16.
 */
@RestController
@CrossOrigin
@RequestMapping("/voters")
public class VoterController {
    private VoterService service;

    @Autowired
    public void setService(VoterService service) {
        this.service = service;
    }

    @RequestMapping(path = {"", "/"}, method = RequestMethod.GET)
    public Page<Voter> index(@RequestParam(name = "page", required = false, defaultValue = "0") int page) {
        return this.service.findAll(page);
    }

//    @RequestMapping(path = {"/{id}/movies"}, method = RequestMethod.GET)
//    public Page<Movie> movies(@PathVariable int id, @RequestParam(name = "page", required = false, defaultValue = "0") int page) {
//        return this.service.findAllMoviesByVoterId(id, page);
//    }
//
//    @RequestMapping(path = {"/{id}/actors"}, method = RequestMethod.GET)
//    public Page<Actor> actors(@PathVariable int id, @RequestParam(name = "page", required = false, defaultValue = "0") int page) {
//        return this.service.findAllActorsByVoterId(id, page);
//    }

    @RequestMapping(path = {"/{id}"}, method = RequestMethod.GET)
    public Voter show(@PathVariable int id) {
        return this.service.findOne(id);
    }

    @RequestMapping(path = {"", "/"}, method = RequestMethod.POST)
    public Voter create(@RequestBody Voter state) {
        return this.service.create(state);
    }

    @RequestMapping(path = {"/{id}"}, method = RequestMethod.DELETE)
    public void destroy(@PathVariable int id) {
        this.service.destroy(id);
    }

    @RequestMapping(path = {"/{id}"}, method = RequestMethod.PUT)
    public Voter update(@PathVariable int id, @RequestBody Voter voter) {
        return this.service.update(id, voter);
    }

    @RequestMapping(path = {"/{id}/vote/{cid}"}, method = RequestMethod.PUT)
    public Voter vote(@PathVariable int id, @PathVariable int cid) {
        return this.service.vote(id, cid);
    }

}
