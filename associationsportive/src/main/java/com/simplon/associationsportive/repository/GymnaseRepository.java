package com.simplon.associationsportive.repository;

import com.simplon.associationsportive.model.Gymnase;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GymnaseRepository extends MongoRepository<Gymnase, String> {
}