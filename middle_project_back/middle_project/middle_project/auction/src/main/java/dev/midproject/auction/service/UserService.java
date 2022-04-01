package dev.midproject.auction.service;

import java.util.List;

import dev.midproject.auction.model.dto.UserDTO;

public interface UserService {
    List<UserDTO> findAllUsers();
    void insertUser(UserDTO userDTO);
    // void login(UserDTO userDTO);
    void login(UserDTO userDTO);
}
