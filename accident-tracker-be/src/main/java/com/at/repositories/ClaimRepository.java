package com.at.repositories;

import com.at.models.Car;
import com.at.models.Claim;
import org.springframework.data.repository.PagingAndSortingRepository;
import com.at.models.Person;

public interface ClaimRepository extends PagingAndSortingRepository<Claim, Integer> {

}
