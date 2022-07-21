package com.user.userServer.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.user.userServer.Service.UserService;
import com.user.userServer.domain.User;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<User>> findAll() {
        List<User> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        user.setCreatedDateTime(LocalDateTime.now());
        user.setLastUpdateDate(LocalDateTime.now());
        User saveUser = userService.addUser(user);
        return new ResponseEntity<>(saveUser, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User saveUser = userService.updateUser(user);
        return new ResponseEntity<>(saveUser, HttpStatus.OK);
    }

}