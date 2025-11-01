package com.example.DEAproject.service;

import com.example.DEAproject.model.Trainer;
import com.example.DEAproject.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrainerServiceImpl implements TrainerService {

    @Autowired
    private TrainerRepository trainerRepository;

    @Override
    public Trainer addTrainer(Trainer trainer) {
        return trainerRepository.save(trainer);
    }

    @Override
    public List<Trainer> getAllTrainers() {
        return trainerRepository.findAll();
    }

    @Override
    public Optional<Trainer> getTrainerById(Long id) {
        return trainerRepository.findById(id);
    }

    @Override
    public Trainer updateTrainer(Long id, Trainer trainer) {
        return trainerRepository.findById(id).map(existing -> {
            existing.setName(trainer.getName());
            existing.setExpertise(trainer.getExpertise()); // fixed field
            existing.setEmail(trainer.getEmail());          // added email update
            return trainerRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Trainer not found with id " + id));
    }

    @Override
    public void deleteTrainer(Long id) {
        trainerRepository.deleteById(id);
    }
}
