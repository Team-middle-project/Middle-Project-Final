package dev.midproject.auction.model.dto;

import dev.midproject.auction.model.entity.User;

public class UserDTO {
    private Long id;
    private String userID;
    private String pw;
    private String userName;
    private int age;
    private String userAddress;
    // private Product product;


    
    // public Product getProduct() {
    //     return product;
    // }

    // public void setProduct(Product product) {
    //     this.product = product;
    // }

    


    public UserDTO(Long id, String userID, String pw, String userName, int age, String userAddress) {
        this.id = id;
        this.userID = userID;
        this.pw = pw;
        this.userName = userName;
        this.age = age;
        this.userAddress = userAddress;
        // this.product = product;
    }

    public UserDTO(User user) {
        this.id = user.getUserid();
        this.userID = user.getId();
        this.pw = user.getPw();
        this.userName = user.getUserName();
        this.age = user.getAge();
        this.userAddress = user.getUserAddress();
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getPw() {
        return pw;
    }
    public void setPw(String pw) {
        this.pw = pw;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getUserAddress() {
        return userAddress;
    }
    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }
    
    
    
}
