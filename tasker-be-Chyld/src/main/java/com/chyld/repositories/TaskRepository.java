package com.chyld.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import com.chyld.models.Task;

public interface TaskRepository extends PagingAndSortingRepository<Task, Integer> {
}
