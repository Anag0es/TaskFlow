package com.example.TaskFlow.model;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "usuarios")
@Getter
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String senha;


}