package com.ekta.groceryApp.repository;

import com.ekta.groceryApp.entity.GrocerySource;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GrocerySourceRepo extends JpaRepository<GrocerySource, Integer> {

    Integer findSourceIdByState(String stateName);
}
