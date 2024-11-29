package com.academic.erp.alumniregistration.repo;

import com.academic.erp.alumniregistration.entity.AlumniEducation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface AlumniEducationRepository extends JpaRepository<AlumniEducation, Long> {
    Optional<AlumniEducation> findByAlumniIdAndPassingYear(Long id, int i);
}
