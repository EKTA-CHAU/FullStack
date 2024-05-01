package com.ekta.groceryApp.repository;

import com.ekta.groceryApp.entity.GroceryAmount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroceryAmountsRepo extends JpaRepository<GroceryAmount, Integer> {
}
