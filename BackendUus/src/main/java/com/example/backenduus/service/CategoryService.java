package com.example.backenduus.service;

import com.example.backenduus.model.Category;
import com.example.backenduus.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CategoryService {
    @Autowired
    CategoryRepository CategoryRepository;
    public List<Category> getCategorys(){

        return CategoryRepository.findAll();
    }

    public void saveCategory(Category category) {
        CategoryRepository.save(category);
    }
}
