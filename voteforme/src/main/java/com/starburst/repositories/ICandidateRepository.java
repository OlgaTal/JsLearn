package com.starburst.repositories;

import com.starburst.entities.Candidate;
import com.starburst.entities.Voter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

/**
 * Created by localadmin on 8/25/16.
 */
public interface ICandidateRepository extends PagingAndSortingRepository<Candidate, Integer> {

    @Query("select distinct v from Voter v join v.candidates c where c.id = :id")
    public Page<Voter> findAllVotersByCandidateId(@Param("id") int id, Pageable pageable);

}
