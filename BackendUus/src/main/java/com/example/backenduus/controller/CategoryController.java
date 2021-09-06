package com.example.backenduus.controller;

import com.example.backenduus.model.Category;
import com.example.backenduus.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {
    @Autowired
    CategoryService categoryService;
    @GetMapping("categorys")
    public List<Category> getCategorys(){
        return CategoryService.getCategorys();
    }

    @PostMapping("categorys")
    public String postCategorys(@RequestBody Category category){
        CategoryService.saveCategory(category);
        return "Kategooria edukalt lisatud: " + category.getName();
    }
    //delete päring

    //edit päring
    //view one päring

    //kategooria teha samamoodi nagu itemid
}
