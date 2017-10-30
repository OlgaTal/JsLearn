package com.at.controllers;


import com.at.repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.PageRequest;
import com.at.models.Car;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping({"/cars"})
public class CarsController {


    private CarRepository repo;

    @Autowired
    public void setRepo(CarRepository repo){
        this.repo = repo;
    }

    @RequestMapping(path = {"", "/"}, method = RequestMethod.GET)
    public Iterable<Car> index(@RequestParam(name = "page", required = false, defaultValue = "0") int page){
        PageRequest pr = new PageRequest(page, 3);
        return repo.findAll(pr);
    }


    @RequestMapping(path = {"", "/"}, method = RequestMethod.POST)
    public Car create(@RequestBody Car car){
        return repo.save(car);
    }

    @RequestMapping(path = {"/all"}, method = RequestMethod.GET)
    public Iterable<Car> index(){
        return repo.findAll();
    }


    @RequestMapping(path = "/byperson/{id}", method = RequestMethod.GET)
    public List<Car> show(@PathVariable int id){
        return repo.findByPersonId(id);
    }

}
