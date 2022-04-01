package dev.midproject.auction.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import dev.midproject.auction.model.entity.Product;
import dev.midproject.auction.model.entity.User;

public class ProductDTO {
    private Long productId;

    private Long uniqueId;

    private String productName;

    private int productCost;

    // @DateTim9eFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private String productDate;

    private String productDescription;
    
    private String productImage;

    private User user;


    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    public ProductDTO(Product product){
        this.productId = product.getProductId();
        // this.uniqueId = product.getUserDb().getUserid();
        this.productName = product.getProductName();
        this.productCost = product.getProductCost();
        this.productDate = product.getProductDate();
        this.productDescription = product.getProductDescription();
        this.productImage = product.getProductImage();
        
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ProductDTO(Long productId, Long uniqueId, String productName, int productCost, String productDate,
            String productDescription) {
        this.productId = productId;
        this.uniqueId = uniqueId;
        this.productName = productName;
        this.productCost = productCost;
        this.productDate = productDate;
        this.productDescription = productDescription;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getUniqueId() {
        return uniqueId;
    }

    public void setUniqueId(Long uniqueId) {
        this.uniqueId = uniqueId;
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

    public void setProductDate(String productDate) {
        if(productDate == null){
            this.productDate = productDate;
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

    @Override
    public String toString() {
        return "ProductDTO [productCost=" + productCost + ", productDate=" + productDate + ", productDescription="
                + productDescription + ", productId=" + productId + ", productName=" + productName + ", uniqueId="
                + uniqueId + "]";
    }

}
