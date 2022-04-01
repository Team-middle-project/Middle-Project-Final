package dev.midproject.auction.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.midproject.auction.model.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
    User findByUserName(String name);
}
