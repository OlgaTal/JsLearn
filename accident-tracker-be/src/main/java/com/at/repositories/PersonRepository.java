package com.at.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import com.at.models.Person;

public interface PersonRepository extends PagingAndSortingRepository<Person, Integer> {
}
