package com.example.backenduus.service;

import com.example.backenduus.model.Item;
import com.example.backenduus.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ItemService {  //uhendame ära repo auto-wire
    @Autowired
    //tekitab singletoni, ehk kogu aeg on servicel ühendus itemrepoga
    ItemRepository itemRepository;
    //public sest teine klass tahab ligi pääseda
    public List<Item> getItems(){
        return itemRepository.findAll();
    }

    public void saveItem(Item item) { //void sest peale salvestamist pole vaja midagi tagastada
        itemRepository.save(item); //save teeb insert into ja item tabelisse item
    }

    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }

    public void editItem(Item item) {
        itemRepository.save(item);
    }

    public Item getOneItem(Long id) throws Exception {
        if(itemRepository.findById(id).isPresent()){
            return itemRepository.findById(id).get();
        }
        throw new Exception();
    }
}