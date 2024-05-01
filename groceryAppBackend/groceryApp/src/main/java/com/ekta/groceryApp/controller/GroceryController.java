package com.ekta.groceryApp.controller;

import com.ekta.groceryApp.entity.GroceryAmount;
import com.ekta.groceryApp.entity.GroceryInfo;
import com.ekta.groceryApp.repository.GroceryAmountsRepo;
import com.ekta.groceryApp.entity.GrocerySource;
import com.ekta.groceryApp.repository.GroceryInfoRepo;
import com.ekta.groceryApp.repository.GrocerySourceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/groceries")
public class GroceryController {

    @Autowired
    private GroceryInfoRepo groceryInfoRepo;

    @Autowired
    private GroceryAmountsRepo groceryAmountsRepo;

    @Autowired
    private GrocerySourceRepo grocerySourceRepo;


//    Add New Grocery
@PostMapping("/addGrocery")
public GroceryInfo addGrocery(@RequestBody GroceryInfo groceryInfo) {

    GroceryInfo savedGrocery = groceryInfoRepo.save(groceryInfo);

    GroceryAmount groceryAmount = new GroceryAmount();
    groceryAmount.setTotalCost(savedGrocery.getCost());
    groceryAmount.setGroceryInfo(savedGrocery);
    groceryAmountsRepo.save(groceryAmount);

    return savedGrocery;
}

    //    Get All Grocery
    @GetMapping("/getAll")
    public List<GroceryInfo> getAllGrocery() {
        return groceryInfoRepo.findAll();
    }

//    Get All States List
    @GetMapping("/getAllStates")
    public List<GrocerySource> getAllStates() {
        return grocerySourceRepo.findAll();
    }

    //    Get particular Grocery
    @GetMapping("/{id}")
    public GroceryInfo getGroceryById(
            @PathVariable Integer id
    ) {
        return groceryInfoRepo.findById(id).orElse(null);
    }


//    Delete A Grocery
    @DeleteMapping("/delete")
    public String deleteGrocery(@PathVariable Integer id) {
        groceryInfoRepo.deleteById(id);
        return "Grocery Deleted Successfully";
    }

//    Update A Grocery
    @PutMapping("/update/{id}")
    public GroceryInfo updateGrocery(
            @PathVariable Integer id,
            @RequestBody GroceryInfo updatedGroceryInfo
    ) {
        updatedGroceryInfo.setId(id);
        return groceryInfoRepo.save(updatedGroceryInfo);
    }

}
