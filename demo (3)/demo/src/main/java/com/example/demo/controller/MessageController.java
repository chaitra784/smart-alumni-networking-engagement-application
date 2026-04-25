package com.example.demo.controller;

import com.example.demo.entity.Message;
import com.example.demo.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin("*")
public class MessageController {

    @Autowired
    private MessageService service;

    @PostMapping
    public Message send(@RequestBody Message msg) {
        return service.send(msg);
    }

    @GetMapping
    public List<Message> getAll() {
        return service.getAll();
    }
}