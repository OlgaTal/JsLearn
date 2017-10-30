package com.starburst.repositories;

import com.starburst.entities.Candidate;
import com.starburst.entities.State;
import com.starburst.entities.Voter;
import com.starburst.enums.Party;
import com.starburst.enums.Position;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by localadmin on 8/25/16.
 */
public interface IStateRepository extends PagingAndSortingRepository<State, Integer> {

    @Query("select c from Voter v join v.candidates c join v.state s where s.id = :id and c.position = :pos")
    List<Candidate> findAllVotesbyStateAndPosition(@Param("id") int id, @Param("pos") Position pos);

    @Query("select count(c) from Voter v join v.candidates c join v.state s where s.id = :id and c.position = :pos and c.party = :party")
    int countAllVotesByStatePositionAndParty(@Param("id") int id, @Param("pos") Position position, @Param("party")  Party party);

    @Query("select c from Candidate c where c.party = :par and c.position = :pos")
    Candidate findCandidateByParty(@Param("par") Party par, @Param("pos") Position pos);

    @Query("select c from Voter v join v.candidates c join v.state s where s.id = :id and c.position = :pos and c.party = :par")
    Candidate findWinnerByStateAndPositionAndParty(@Param("id") int id, @Param("pos") Position pos, @Param("par") Party par);

}
