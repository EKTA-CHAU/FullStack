package com.ekta.groceryApp.repository;

import com.ekta.groceryApp.entity.GroceryInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroceryInfoRepo extends JpaRepository<GroceryInfo, Integer> {
}
