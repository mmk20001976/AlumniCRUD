package com.academic.erp.alumniregistration.dto;

import jakarta.validation.constraints.*;

public record RegistrationRequest (
        @NotBlank(message = "First name is mandatory")
        @Size(max = 50, message = "First name must not exceed 50 characters")
        String firstName,

        @NotBlank(message = "Last name is mandatory")
        @Size(max = 50, message = "Last name must not exceed 50 characters")
        String lastName,

        @NotBlank(message = "Email is mandatory")
        @Email(message = "Email should be valid")
        String email,

        @NotBlank(message = "Password is mandatory")
        @Size(min = 8, max = 20, message = "Password must be between 8 and 20 characters")
        String password,

        @NotBlank(message = "Contact number is mandatory")
        @Pattern(regexp = "\\d{10}", message = "Contact number must be 10 digits")
        String contactNo,

        @NotBlank(message = "Degree is mandatory")
        @Size(max = 100, message = "Degree must not exceed 100 characters")
        String degree,

        @Positive(message = "Passing year must be a positive number")
        int passingYear,

        @Positive(message = "Joining year must be a positive number")
        int joiningYear,

        @NotBlank(message = "College name is mandatory")
        @Size(max = 200, message = "College name must not exceed 200 characters")
        String collegeName,

        @NotBlank(message = "Organization is mandatory")
        @Size(max = 200, message = "Organization must not exceed 200 characters")
        String organizationName,

        @NotBlank(message = "Position is mandatory")
        @Size(max = 100, message = "Position must not exceed 100 characters")
        String position,

        @NotBlank(message = "Address is mandatory")
        @Size(max = 500, message = "Address must not exceed 500 characters")
        String address,

        String joiningDate,

        String leavingDate
) {}
