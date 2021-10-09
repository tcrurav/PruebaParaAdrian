package org.adrian.task.entity.dao;

import org.adrian.task.entity.models.Subject;
import org.springframework.data.repository.CrudRepository;

public interface ISubjectDao extends CrudRepository<Subject, Long> {

}
