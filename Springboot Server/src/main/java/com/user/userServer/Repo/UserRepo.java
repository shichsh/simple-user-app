package com.user.userServer.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.user.userServer.domain.User;

public interface UserRepo extends JpaRepository<User, Long> {
    User findUserById(Long id);
}