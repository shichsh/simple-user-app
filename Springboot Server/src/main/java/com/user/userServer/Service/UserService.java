package com.user.userServer.Service;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.userServer.Repo.UserRepo;
import com.user.userServer.domain.User;

@Service
@Transactional
public class UserService {
    private UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public List<User> findAllUsers() {
        return userRepo.findAll();
    }

    public User addUser(User user) {
        return userRepo.save(user);
    }

    public User updateUser(User user) {
        User curUser = userRepo.findUserById(user.getId());
        curUser.setEmail(user.getEmail());
        curUser.setFirstName(user.getFirstName());
        curUser.setLastName(user.getLastName());
        curUser.setLastUpdateDate(LocalDateTime.now());
        return userRepo.save(curUser);
    }
    
}
