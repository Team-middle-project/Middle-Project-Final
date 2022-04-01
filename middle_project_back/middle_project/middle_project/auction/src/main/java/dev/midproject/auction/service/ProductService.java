package dev.midproject.auction.service;

import java.util.List;

import dev.midproject.auction.model.dto.ProductDTO;

public interface ProductService {

    List<ProductDTO> findAllProductName();
    void insertProduct(ProductDTO productDTO);
    void updateProduct(ProductDTO productDTO);
    
}
