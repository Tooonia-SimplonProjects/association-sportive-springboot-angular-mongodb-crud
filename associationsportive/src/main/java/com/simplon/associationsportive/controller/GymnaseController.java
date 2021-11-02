package com.simplon.associationsportive.controller;

import com.simplon.associationsportive.model.Gymnase;
import com.simplon.associationsportive.service.GymnaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/*Testing the Controller at the very beginning
@RestController
@RequestMapping ("/gymnases")
public class GymnaseController {

    @GetMapping
    public String gymnasesList() {
        return "Me voilà!";
    }
}*/
// TODO: Logger and exception handlers to insert

//We are now implementing the REST API, that is in our case a simple REST controller.
//the annotation enables Cross-Origin Resource Sharing (CORS) on the server.
//since we're deploying our Angular frontend to http://localhost:4200, and our Spring Boot backend to http://localhost:8080,
// the browser would otherwise deny requests from one to the other.
@RestController
@RequestMapping ("/associationsportive")
@CrossOrigin(origins = "http://localhost:4200")
public class GymnaseController {

    @Autowired
    private GymnaseService gymnaseService;

    @PostMapping("/gymnases")
//    consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Gymnase saveGymnase(@RequestBody Gymnase gymnase) {

        return gymnaseService.create(gymnase);
    }

    @GetMapping ("/gymnases")
//    produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Gymnase> getAllGymnases() {
        return gymnaseService.read();
    }

    @GetMapping ("/gymnases/{id}")
//    produces = MediaType.APPLICATION_JSON_VALUE)
    public Optional<Gymnase> getGymnaseById(@PathVariable String id) throws IOException {

        return gymnaseService.findById(id);
    }

    @PutMapping("/gymnases/{id}")
//     consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Gymnase updateGymnase(@RequestBody Gymnase gymnase, @PathVariable String id) {

        return gymnaseService.update(gymnase);
    }

    @DeleteMapping("/gymnases/{id}")
    public Map<String, String> deleteGymnase(@PathVariable String id) {

        return gymnaseService.delete(id);
    }
}