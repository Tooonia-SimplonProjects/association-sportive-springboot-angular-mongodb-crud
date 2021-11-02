package com.simplon.associationsportive.service;

import com.simplon.associationsportive.model.Gymnase;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public interface GymnaseService {

    Gymnase create(Gymnase gymnase);

    List<Gymnase> read();

    Optional<Gymnase> findById(String id) throws IOException;

    Gymnase update(Gymnase gymnase);

    Map<String, String> delete(String id);
}