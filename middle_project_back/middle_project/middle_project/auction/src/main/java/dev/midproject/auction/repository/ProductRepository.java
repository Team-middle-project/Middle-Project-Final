package dev.midproject.auction.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.midproject.auction.model.entity.Product;

public interface ProductRepository extends JpaRepository<Product,Long>{
    Product findByProductName(String productName);
    // Product findBy
}
