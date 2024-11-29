package com.academic.erp.alumniregistration.service;

import com.academic.erp.alumniregistration.dto.LoginRequest;
import com.academic.erp.alumniregistration.dto.RegistrationRequest;
import com.academic.erp.alumniregistration.dto.SearchRequest;
import com.academic.erp.alumniregistration.entity.Alumni;
import com.academic.erp.alumniregistration.entity.AlumniEducation;
import com.academic.erp.alumniregistration.entity.AlumniOrganization;
import com.academic.erp.alumniregistration.exception.ResourceNotFoundException;
import com.academic.erp.alumniregistration.helper.JwtUtil;
import com.academic.erp.alumniregistration.repo.AlumniEducationRepository;
import com.academic.erp.alumniregistration.repo.AlumniOrganizationRepository;
import com.academic.erp.alumniregistration.repo.AlumniRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AlumniService {

    private final AlumniRepository alumniRepository;
    private final AlumniEducationRepository alumniEducationRepository;
    private final AlumniOrganizationRepository alumniOrganizationRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public String registerAlumni(RegistrationRequest registrationRequest) {
        Alumni alumni = new Alumni();
        AlumniEducation ae = new AlumniEducation();
        AlumniOrganization ao = new AlumniOrganization();

        alumni.setFirstName(registrationRequest.firstName());
        alumni.setLastName(registrationRequest.lastName());
        alumni.setEmail(registrationRequest.email());
        alumni.setPassword(passwordEncoder.encode(registrationRequest.password()));
        alumni.setContactNo(registrationRequest.contactNo());
        alumniRepository.save(alumni);

        ae.setAlumni(alumni);
        ae.setDegree(registrationRequest.degree());
        ae.setPassingYear(registrationRequest.passingYear());
        ae.setJoiningYear(registrationRequest.joiningYear());
        ae.setCollegeName(registrationRequest.collegeName());
        ae.setAddress(registrationRequest.address());
        alumniEducationRepository.save(ae);

        ao.setAlumni(alumni);
        ao.setOrganizationName(registrationRequest.organizationName());
        ao.setPosition(registrationRequest.position());
        ao.setJoiningDate(registrationRequest.joiningDate());
        ao.setLeavingDate(registrationRequest.leavingDate());
        alumniOrganizationRepository.save(ao);

        return "Registration Successful";
    }

    public Alumni searchAlumni(SearchRequest searchRequest) {
        if(alumniRepository.findByFirstNameAndLastNameAndEmail(searchRequest.firstName(), searchRequest.lastName(), searchRequest.email()).isPresent())
        {
            Alumni alumni = alumniRepository.findByFirstNameAndLastNameAndEmail(searchRequest.firstName(), searchRequest.lastName(), searchRequest.email()).orElse(null);
            if(alumniEducationRepository.findByAlumniIdAndPassingYear(alumni.getId(), searchRequest.passingYear()).isPresent())
                return alumni;
        }
        throw new ResourceNotFoundException("Alumni not found with the provided details.");
    }

    public String loginAlumni(LoginRequest loginRequest) {
        Alumni alumni = alumniRepository.findByEmail(loginRequest.email());

        if(alumni == null)
            return null;
        else if(!passwordEncoder.matches(loginRequest.password(), alumni.getPassword()))
        {
            return null;
        }
        return jwtUtil.generateToken(loginRequest.email());
    }
}
