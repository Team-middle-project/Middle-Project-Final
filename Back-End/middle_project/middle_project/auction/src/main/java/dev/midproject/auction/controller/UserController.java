package dev.midproject.auction.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.midproject.auction.model.dto.UserDTO;
import dev.midproject.auction.service.UserService;

@CrossOrigin(origins = "*")
@RestController 
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;
    
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @GetMapping("")
    public List<UserDTO> findAllUsers(){
        return userService.findAllUsers();
    }
    
    @PostMapping("/add") //POST: ~/api/v1/orders
    public void insertUser(@RequestBody UserDTO userDTO){
        System.out.println(userDTO);
        userService.insertUser(userDTO);
    }


    @PostMapping("/update") //POST: ~/api/v1/orders
    public void login(@RequestBody UserDTO userDTO){
        System.out.println(userDTO);
        userService.login(userDTO);
    }
    
}
