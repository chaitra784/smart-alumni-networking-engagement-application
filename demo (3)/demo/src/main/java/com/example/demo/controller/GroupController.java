package com.example.demo.controller;

import com.example.demo.entity.GroupEntity;
import com.example.demo.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/groups")
@CrossOrigin("*")
public class GroupController {

    @Autowired
    private GroupService service;

    @PostMapping
    public GroupEntity create(@RequestBody GroupEntity group) {
        return service.create(group);
    }

    @GetMapping
    public List<GroupEntity> getAll() {
        return service.getAll();
    }
}