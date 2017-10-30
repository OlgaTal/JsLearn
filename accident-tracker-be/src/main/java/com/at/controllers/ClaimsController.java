package com.at.controllers;

import com.at.models.Claim;
import com.at.models.Person;
import com.at.repositories.ClaimRepository;
import com.at.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

/**
 * Created by localadmin on 8/18/16.
 */

@RestController
@CrossOrigin
@RequestMapping({"/claims"})
public class ClaimsController {

    private ClaimRepository repo;

    private PersonRepository repop;

    @Autowired
    public void setRepo(ClaimRepository repo){
        this.repo = repo;
    }

    @Autowired
    public void setRepo(PersonRepository repop){
        this.repop = repop;
    }

    @RequestMapping(path = {"", "/"}, method = RequestMethod.GET)
    public Iterable<Claim> index(@RequestParam(name = "page", required = false, defaultValue = "0") int page){
        PageRequest pr = new PageRequest(page, 3);
        return repo.findAll(pr);
    }

    @RequestMapping(path = {"/all"}, method = RequestMethod.GET)
    public Iterable<Claim> index(){
        return repo.findAll();
    }


    @RequestMapping(path = {"", "/"}, method = RequestMethod.POST)
    public Claim create(@RequestBody Claim claim){
       return repo.save(claim);

    }

//
//    @RequestMapping(path = {"", "/"}, method = RequestMethod.POST)
//    public Claim create(@RequestBody Claim claim, @PathVariable int personId)){
//        System.out.println("pId*********************************: " + personId);
//      if (personId != 0 ){
//          Person p = repop.findOne(personId);
//          System.out.println("p*********************************: " + p);
//          p.setClaims(p.getClaims() +1);
//          repop.save(p);
//      }
//
//       return repo.save(claim);
//
//    }
}
