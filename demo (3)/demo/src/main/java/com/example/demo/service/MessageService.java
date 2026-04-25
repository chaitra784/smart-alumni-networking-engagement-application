package com.example.demo.service;

import com.example.demo.entity.Message;
import com.example.demo.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepository repo;

    public Message send(Message msg) {
        return repo.save(msg);
    }

    public List<Message> getAll() {
        return repo.findAll();
    }
}