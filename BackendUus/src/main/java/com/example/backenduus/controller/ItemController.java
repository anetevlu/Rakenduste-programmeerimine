package com.example.backenduus.controller;

import com.example.backenduus.model.Item;
import com.example.backenduus.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
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
    public String postItem(@RequestBody Item item){ //requestBody ütleb, et midagi peab päringuga kaasa minema
        itemService.saveItem(item); //kui tehakse post päring sellele url-le ja antakse kaasa body,
        // siis läheb see funk käima ja front endile tagastatakse see kirje
        return "Ese edukalt lisatud: " + item.getName();
    }
    //delete päring

    //edit päring
    //view one päring

    //kategooria teha samamoodi nagu itemid
}
