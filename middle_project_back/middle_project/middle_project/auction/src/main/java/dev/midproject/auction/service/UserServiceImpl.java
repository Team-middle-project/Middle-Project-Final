package dev.midproject.auction.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.midproject.auction.model.dto.UserDTO;
import dev.midproject.auction.model.entity.User;
import dev.midproject.auction.repository.ProductRepository;
import dev.midproject.auction.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;


    @Override
    public void insertUser(UserDTO userDTO) {
        // System.out.println();
        // Product product = productRepository.findByProductName(userDTO.getUserID());
        
        User user = new User();

        user.setUserid(userDTO.getId());
        user.setUserName(userDTO.getUserName());
        user.setId(userDTO.getUserID());
        user.setPw(userDTO.getPw());
        user.setAge(userDTO.getAge());
        user.setUserAddress(userDTO.getUserAddress());
        // user.setProduct(product);
        System.out.println(user.getUserName());
        userRepository.save(user);
    }
    @Override
    public void login(UserDTO userDTO) {
        
        User user = new User();

        
        user.setId(userDTO.getUserID());
        user.setPw(userDTO.getPw());

        List<User> list = userRepository.findAll();       
        List<UserDTO> result = list.stream().map(r -> new UserDTO(r)).collect(Collectors.toList());

        for(int i = 0 ;i <result.size(); i++){
            if(result.get(i).getUserID().equals(user.getId()) && result.get(i).getPw().equals(user.getPw())){
                System.out.println("성공하였습니다.");
            }else{
                // System.out.println("로그인 실패하였습니다..");
            }
        }

    }


    @Override
    public List<UserDTO> findAllUsers() {
        
        List<User> list = userRepository.findAll();       
        List<UserDTO> result = list.stream().map(r -> new UserDTO(r)).collect(Collectors.toList());
        User user = new User();
        return result;
    }

    
    

}
