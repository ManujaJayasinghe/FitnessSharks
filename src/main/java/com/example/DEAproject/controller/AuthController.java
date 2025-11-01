package com.example.DEAproject.controller;

import com.example.DEAproject.dto.UserDTO;
import com.example.DEAproject.model.Role;
import com.example.DEAproject.model.User;
import com.example.DEAproject.repository.RoleRepository;
import com.example.DEAproject.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepo;
    private final RoleRepository roleRepo;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authManager;

    public AuthController(UserRepository ur, RoleRepository rr, PasswordEncoder pe, AuthenticationManager am) {
        this.userRepo = ur;
        this.roleRepo = rr;
        this.passwordEncoder = pe;
        this.authManager = am;
    }

    // Register a new user
    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody UserDTO dto) {
        if (userRepo.findByUsername(dto.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("error", "username taken"));
        }
        if (userRepo.findByEmail(dto.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("error", "email taken"));
        }

        User u = new User();
        u.setUsername(dto.getUsername());
        u.setEmail(dto.getEmail());
        u.setPassword(passwordEncoder.encode(dto.getPassword()));

        Role userRole = roleRepo.findByName("USER")
                .orElseGet(() -> roleRepo.save(new Role(null, "USER")));
        u.getRoles().add(userRole);
        userRepo.save(u);

        return ResponseEntity.created(URI.create("/api/users/" + u.getId()))
                .body(Map.of("msg", "created"));
    }

    // Login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body, HttpSession session) {
        String username = body.get("username");
        String password = body.get("password");

        User user = userRepo.findByUsername(username).orElse(null);
        if (user == null || !passwordEncoder.matches(password, user.getPassword())) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid username or password"));
        }

        // Store info in session
        session.setAttribute("loggedUser", user.getUsername());
        session.setAttribute("userId", user.getId()); // ✅ fixed: userId stored
        session.setAttribute("roles", user.getRoles());

        return ResponseEntity.ok(Map.of("msg", "logged-in"));
    }

    // Logout
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok(Map.of("msg", "logged out"));
    }

    // Check current session
    @GetMapping("/session")
    public ResponseEntity<?> checkSession(HttpSession session) {
        String loggedUser = (String) session.getAttribute("loggedUser");
        if (loggedUser != null) {
            return ResponseEntity.ok(Map.of("user", loggedUser));
        } else {
            return ResponseEntity.status(401).body(Map.of("error", "No active session"));
        }
    }
}
