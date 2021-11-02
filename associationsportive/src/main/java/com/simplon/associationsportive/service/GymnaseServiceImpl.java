package com.simplon.associationsportive.service;

import com.simplon.associationsportive.model.Gymnase;
import com.simplon.associationsportive.repository.GymnaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class GymnaseServiceImpl implements GymnaseService {

    @Autowired
    private GymnaseRepository gymnaseRepository;

    @Override
    public Gymnase create(Gymnase gymnase) {
        return gymnaseRepository.insert(gymnase);
    }

    @Override
    public List<Gymnase> read() {
        return gymnaseRepository.findAll();
    }

    @Override
    public Optional<Gymnase> findById(String id) throws IOException {
        if (gymnaseRepository.findById(id).isPresent()) {
            return this.gymnaseRepository.findById(id);
        } else {
            throw new IllegalArgumentException("The id you are entering does not exist in the database");
        }
    }

    @Override
    public Gymnase update(Gymnase gymnase) {

        return gymnaseRepository.save(gymnase);
    }

    @Override
    public Map<String, String> delete(String id) {

        // Total count of data before delete
        long beforeDelete = gymnaseRepository.count();

        gymnaseRepository.deleteById(id);

        // Total count of data after delete
        long afterDelete = gymnaseRepository.count();

        String messageValue = beforeDelete == afterDelete ? "Something went wrong!" : "Record deleted";

        Map<String, String> deleteMap = new HashMap<>();
        deleteMap.put("message", messageValue);

        return deleteMap;
    }
}
