package com.example.backenduus.controller;

import com.example.backenduus.model.Item;
import com.example.backenduus.service.ItemService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {
    @Autowired
    ItemService itemService;
    //get päring aadressil localhost:8080/items
    //läheb tööle kui on õige päringu tüüp ja url
    @GetMapping("items")
    public List<Item> getItems(){
        return itemService.getItems();
        //sulgudes aadress,vaikimisi base ehk localhost/8080
    }

    //post ehk alati peaks url-le midagi kaasa andma, tavaliselt JSON kujul
    @PostMapping("items")
    public String postItem(@RequestBody Item item) { //requestBody ütleb, et midagi peab päringuga kaasa minema
        itemService.saveItem(item);
        return "Ese edukalt lisatud: " + item.getName();
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return itemService.getItems();
    }
    @ApiOperation("API otspunkt eseme muutmiseks, alati saata kaasa ID")
    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item) {
        itemService.editItem(item);
    }

    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception {
        return itemService.getOneItem(id);
    }
}
