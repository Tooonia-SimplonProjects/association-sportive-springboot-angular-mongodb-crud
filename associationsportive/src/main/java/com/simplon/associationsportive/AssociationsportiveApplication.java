package com.simplon.associationsportive;

import com.simplon.associationsportive.repository.GymnaseRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
//@EnableMongoRepositories(basePackageClasses = GymnaseRepository.class)
public class AssociationsportiveApplication {

	public static void main(String[] args) {
		SpringApplication.run(AssociationsportiveApplication.class, args);
	}

}
