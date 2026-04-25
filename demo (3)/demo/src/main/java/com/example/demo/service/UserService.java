package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User register(User user) {
        return repo.save(user);
    }

    public User login(String email, String password) {
        Optional<User> user = repo.findByEmail(email);
        if(user.isPresent() && user.get().getPassword().equals(password)) {
            return user.get();
        }
        return null;
    }
}