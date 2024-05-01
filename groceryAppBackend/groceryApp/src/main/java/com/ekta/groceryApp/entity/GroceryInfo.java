package com.ekta.groceryApp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "groceryInfo")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GroceryInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "grocery_id")
    private Integer id;

    @Column(name = "grocery_name")
    private String name;

    @Column(name = "cost_per_item")
    private double cost;

    @Column(name = "source_id") // Mapping for the source_id column
    private Integer source_id;

    @OneToOne(mappedBy = "groceryInfo", cascade = CascadeType.ALL)
    private GroceryAmount groceryAmount;

    @ManyToOne
    @JoinColumn(name = "source_id", referencedColumnName = "source_id", insertable = false, updatable = false)
    private GrocerySource grocerySource; // Many-to-One relationship using source_id column

}
