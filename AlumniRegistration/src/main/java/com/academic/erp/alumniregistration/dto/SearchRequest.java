package com.academic.erp.alumniregistration.dto;

import jakarta.validation.constraints.*;

public record SearchRequest (
        @Positive(message = "Passing year must be a positive number")
        int passingYear,

        @NotBlank(message = "First name is mandatory")
        @Size(max = 50, message = "First name must not exceed 50 characters")
        String firstName,

        @NotBlank(message = "Last name is mandatory")
        @Size(max = 50, message = "Last name must not exceed 50 characters")
        String lastName,

        @NotBlank(message = "Email is mandatory")
        @Email(message = "Email should be valid")
        String email
){
}
