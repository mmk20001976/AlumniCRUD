package com.academic.erp.alumniregistration.controller;

import com.academic.erp.alumniregistration.dto.LoginRequest;
import com.academic.erp.alumniregistration.dto.RegistrationRequest;
import com.academic.erp.alumniregistration.dto.SearchRequest;
import com.academic.erp.alumniregistration.entity.Alumni;
import com.academic.erp.alumniregistration.service.AlumniService;
import com.academic.erp.alumniregistration.exception.InvalidCredentialsException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/alumni/")
@CrossOrigin(origins = "http://localhost:3000")
public class AlumniController {
    private final AlumniService alumniService;

    @PostMapping("login")
    public ResponseEntity<String> loginAlumni(@RequestBody @Valid LoginRequest loginRequest) {
        String token = alumniService.loginAlumni(loginRequest);
        if(token != null)
        {
            return ResponseEntity.ok(token);
        }
        throw new InvalidCredentialsException("Invalid credentials provided.");
    }

    @PostMapping("register")
    public ResponseEntity<String> registerAlumni(@RequestBody @Valid RegistrationRequest registrationRequest) {
        return ResponseEntity.ok(alumniService.registerAlumni(registrationRequest));
    }

    @PostMapping("search")
    public ResponseEntity<Alumni> searchAlumni(@RequestBody @Valid SearchRequest searchRequest) {
        return ResponseEntity.ok(alumniService.searchAlumni(searchRequest));
    }
}
