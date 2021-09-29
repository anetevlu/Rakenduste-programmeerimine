package com.example.backenduus.controller;

import com.example.backenduus.model.Category;
import com.example.backenduus.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
    @Autowired
    CategoryService categoryService;
    @GetMapping("categories")
    public List<Category> getCategories(){

        return categoryService.getCategories();
    }

    @PostMapping("categories")
    public String postCategories(@RequestBody Category category){
        categoryService.saveCategory(category);
        return "Kategooria edukalt lisatud: " + category.getName();
    }
}
