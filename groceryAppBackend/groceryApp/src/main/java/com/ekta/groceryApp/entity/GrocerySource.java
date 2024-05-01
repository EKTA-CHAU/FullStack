package com.ekta.groceryApp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "grocerySource")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GrocerySource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer source_id;
    @Column(name = "state_name")
    private String state;

    @JsonIgnore
    @OneToMany(mappedBy = "grocerySource", cascade = CascadeType.ALL)
    private List<GroceryInfo> groceryInfoList;
}
