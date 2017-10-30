package com.at.controllers;


/**
 * Created by localadmin on 8/18/16.
 */

import com.at.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.PageRequest;
import com.at.models.Person;

@RestController
@CrossOrigin
@RequestMapping({"/persons"})
public class PersonsController {

    private PersonRepository repo;

    @Autowired
    public void setRepo(PersonRepository repo){
        this.repo = repo;
    }

    @RequestMapping(path = {"/all"}, method = RequestMethod.GET)
    public Iterable<Person> index(){
        return repo.findAll();
    }

    @RequestMapping(path = {"", "/"}, method = RequestMethod.GET)
    public Iterable<Person> index(@RequestParam(name = "page", required = false, defaultValue = "0") int page){
        PageRequest pr = new PageRequest(page, 3);
        return repo.findAll(pr);
    }

    @RequestMapping(path = {"", "/"}, method = RequestMethod.POST)
    public Person create(@RequestBody Person person){

        return repo.save(person);
    }

}
