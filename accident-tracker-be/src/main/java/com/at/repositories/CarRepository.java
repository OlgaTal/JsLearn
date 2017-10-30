package com.at.repositories;

import com.at.models.Car;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Parameter;

import java.util.List;

public interface CarRepository extends PagingAndSortingRepository<Car, Integer> {

    List<Car> findByPersonId(int person_id);
}