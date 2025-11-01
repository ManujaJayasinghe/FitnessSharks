package com.example.DEAproject.controller;

import com.example.DEAproject.model.Plan;
import com.example.DEAproject.repository.PlanRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plans")
public class PlanController {

    private final PlanRepository planRepository;

    public PlanController(PlanRepository planRepository) {
        this.planRepository = planRepository;
    }

    // ✅ Add a new training plan (Admin only)
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<Plan> createPlan(@RequestBody Plan plan) {
        Plan saved = planRepository.save(plan);
        return ResponseEntity.ok(saved);
    }

    // ✅ Get all training plans (everyone can view)
    @GetMapping
    public ResponseEntity<List<Plan>> getAllPlans() {
        return ResponseEntity.ok(planRepository.findAll());
    }

    // ✅ Delete a plan (Admin only)
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePlan(@PathVariable Long id) {
        if (!planRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        planRepository.deleteById(id);
        return ResponseEntity.ok("Plan deleted successfully");
    }
}
