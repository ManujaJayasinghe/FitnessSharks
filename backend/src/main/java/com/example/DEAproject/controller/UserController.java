package com.example.DEAproject.controller;

import com.example.DEAproject.dto.UserDTO;
import com.example.DEAproject.model.User;
import com.example.DEAproject.service.UserService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    // Login with session
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserDTO userDTO, HttpSession session) {
        Optional<User> user = userService.loginUser(userDTO.getUsername(), userDTO.getPassword());

        if (user.isPresent()) {
            // Store username in session
            session.setAttribute("loggedUser", user.get().getUsername());
            return ResponseEntity.ok("Login successful, session created!");
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }

    // Check session
    @GetMapping("/session")
    public ResponseEntity<String> checkSession(HttpSession session) {
        String loggedUser = (String) session.getAttribute("loggedUser");
        if (loggedUser != null) {
            return ResponseEntity.ok("Current session user: " + loggedUser);
        } else {
            return ResponseEntity.status(401).body("No active session!");
        }
    }

    // Logout
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("Logged out successfully, session destroyed!");
    }

    // Get all users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
}
