package com.example.demo.service;

import com.example.demo.entity.GroupEntity;
import com.example.demo.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupService {

    @Autowired
    private GroupRepository repo;

    public GroupEntity create(GroupEntity group) {
        return repo.save(group);
    }

    public List<GroupEntity> getAll() {
        return repo.findAll();
    }
}