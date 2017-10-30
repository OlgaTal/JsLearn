package com.starburst.repositories;

import com.starburst.entities.Voter;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IVoterRepository extends PagingAndSortingRepository<Voter, Integer> {


}
