package dev.midproject.auction.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.midproject.auction.model.dto.ProductDTO;
import dev.midproject.auction.service.ProductService;
// import dev.midproject.auction.service.ProductServicePart2;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/product")
public class ProductController {

    private final ProductService productService;
    // private ProductServicePart2 productServicePart2;
    
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    
    
    @GetMapping("")
    public List<ProductDTO> findAllProductName(){
        return productService.findAllProductName();
    }

    @PostMapping("/add") //POST: ~/api/v1/orders
    public void insertProduct(@RequestBody ProductDTO productDTO){
        System.out.println(productDTO);
        productService.insertProduct(productDTO);
    }
    @PostMapping("/update")
    public void updateProduct(@RequestBody ProductDTO productDTO){
        System.out.println(productDTO);
        productService.updateProduct(productDTO);
    }
}
