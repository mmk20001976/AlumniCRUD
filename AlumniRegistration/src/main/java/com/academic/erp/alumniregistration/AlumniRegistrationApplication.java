package com.academic.erp.alumniregistration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class AlumniRegistrationApplication {

    public static void main(String[] args) {
        SpringApplication.run(AlumniRegistrationApplication.class, args);
    }

}
