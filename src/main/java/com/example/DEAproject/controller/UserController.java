package com.example.DEAproject.controller;


import com.example.DEAproject.dto.UserDTO;
import com.example.DEAproject.model.User;
import com.example.DEAproject.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Sign up
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(
            @Valid @RequestBody UserDTO userDTO,
            @RequestParam(defaultValue = "CUSTOMER") String role // default role CUSTOMER
    ) {
        User savedUser = userService.registerUser(userDTO, role);
        return ResponseEntity.ok(savedUser);
    }

    // Login
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserDTO userDTO) {
        return userService.loginUser(userDTO.getUsername(), userDTO.getPassword())
                .map(user -> ResponseEntity.ok("Login successful!"))
                .orElse(ResponseEntity.status(401).body("Invalid credentials"));
    }


    // Get all users (Admin only later)
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
}

