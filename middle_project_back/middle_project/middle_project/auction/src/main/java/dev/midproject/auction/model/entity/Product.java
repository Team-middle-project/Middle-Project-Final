package dev.midproject.auction.model.entity;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "PRODUCT")
public class Product {
    @Id
    // @OneToMany
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRODUCT_ID")
    private Long productId;

    private String productName;
    
    private int productCost;
    
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private String productDate;
    
    private String productImage;

    private String productDescription;
    
    @ManyToOne
    @JoinColumn(name = "USERID")
    private User user;

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getProductCost() {
        return productCost;
    }

    public void setProductCost(int productCost) {
        this.productCost = productCost;
    }

    public String getProductDate() {
        return productDate;
    }

    //로그인 get해서 비교하는거
    //product 포스트할때 userid 읽어온 후 추가하고 cost 수정

    public void setProductDate(String productDate) {
        if(productDate == null){       
            Date now = new Date();
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String formatedNow = formatter.format(now);
            System.out.println("이거는 product 현재 시간은 : " + formatedNow);
            this.productDate = formatedNow;
        }
        else{
            this.productDate = productDate;
        }
    }



    public String getProductDescription() {
        return productDescription;
    }



    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }
}
