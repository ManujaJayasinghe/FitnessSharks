package com.example.DEAproject.controller;

import com.example.DEAproject.model.Trainer;
import com.example.DEAproject.service.TrainerService;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/trainers")
public class TrainerController {

    private final TrainerService trainerService;

    public TrainerController(TrainerService trainerService) {
        this.trainerService = trainerService;
    }

    private boolean isAdmin(HttpSession session) {
        Set<?> roles = (Set<?>) session.getAttribute("roles");
        return roles != null && roles.stream().anyMatch(r -> r.toString().contains("ADMIN"));
    }

    // Add new trainer - only admin
    @PostMapping
    public ResponseEntity<?> addTrainer(@RequestBody Trainer trainer, HttpSession session) {
        if (!isAdmin(session)) return ResponseEntity.status(403).body("Forbidden");
        return ResponseEntity.ok(trainerService.addTrainer(trainer));
    }

    @GetMapping
    public ResponseEntity<List<Trainer>> getAllTrainers() {
        return ResponseEntity.ok(trainerService.getAllTrainers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Trainer> getTrainerById(@PathVariable Long id) {
        return trainerService.getTrainerById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTrainer(@PathVariable Long id, @RequestBody Trainer trainer, HttpSession session) {
        if (!isAdmin(session)) return ResponseEntity.status(403).body("Forbidden");
        return ResponseEntity.ok(trainerService.updateTrainer(id, trainer));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTrainer(@PathVariable Long id, HttpSession session) {
        if (!isAdmin(session)) return ResponseEntity.status(403).body("Forbidden");
        trainerService.deleteTrainer(id);
        return ResponseEntity.noContent().build();
    }
}
