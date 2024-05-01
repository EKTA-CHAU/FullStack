package com.ekta.groceryApp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "groceryAmount")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GroceryAmount {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "grocery_id")
    private Integer id;
    @Column
    private Integer items_available;
    @Column(name = "total_cost_of_items")
    private double totalCost;

    @OneToOne
    @JoinColumn(name = "grocery_id", referencedColumnName = "grocery_id")
    private GroceryInfo groceryInfo;
}
