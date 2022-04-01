package dev.midproject.auction.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.midproject.auction.model.dto.ProductDTO;
import dev.midproject.auction.model.entity.Product;
import dev.midproject.auction.model.entity.User;
import dev.midproject.auction.repository.ProductRepository;
import dev.midproject.auction.repository.UserRepository;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    UserRepository userRepository;


    @Override
    public void insertProduct(ProductDTO productDTO) {
        System.out.println();

        User user = userRepository.findByUserName(productDTO.getProductName());

        
        Product product = new Product();

        product.setProductName(productDTO.getProductName());
        product.setProductCost(productDTO.getProductCost());
        product.setProductImage(productDTO.getProductImage());
        product.setProductDescription(productDTO.getProductDescription());
        product.setProductDate(null);

        product.setUser(user);

        productRepository.save(product);
    }


    @Override
    public List<ProductDTO> findAllProductName() {
        List<Product> list = productRepository.findAll();
        
        List<ProductDTO> result = list.stream().map(r -> new ProductDTO(r)).collect(Collectors.toList());
        // System.out.println(list);
        // System.out.println(result);
        return result;
    }


    @Override
    public void updateProduct(ProductDTO productDTO) {

        Product product = new Product();

        List<Product> list = productRepository.findAll();
        List<ProductDTO> result = list.stream().map(r -> new ProductDTO(r)).collect(Collectors.toList());
        product.setProductName(productDTO.getProductName());
        product.setProductCost(productDTO.getProductCost());


        for(int i = 0 ;i <result.size(); i++){
            if(result.get(i).getProductName().equals(product.getProductName()) && result.get(i).getProductCost() < product.getProductCost()){
                System.out.println("변경에 성공하였습니다.");
                product.setProductId(result.get(i).getProductId());
                product.setProductDate(result.get(i).getProductDate());
                product.setProductDescription(result.get(i).getProductDescription());
                product.setProductImage(result.get(i).getProductImage());
                productRepository.save(product);
            }else{
            }   
        }
    }

}
