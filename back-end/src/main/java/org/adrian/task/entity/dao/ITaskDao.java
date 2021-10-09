package org.adrian.task.entity.dao;

import org.adrian.task.entity.models.Task;
import org.springframework.data.repository.CrudRepository;

public interface ITaskDao extends CrudRepository<Task, Long> {

}
