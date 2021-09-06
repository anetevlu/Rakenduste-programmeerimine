package com.example.backenduus.repository;

import com.example.backenduus.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository //repository sees on kõik andmebaasiga seotud
public interface ItemRepository extends JpaRepository<Item, Long> {

}
