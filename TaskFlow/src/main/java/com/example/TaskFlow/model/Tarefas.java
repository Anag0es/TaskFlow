package com.example.TaskFlow.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "tarefas")
public class Tarefas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String descricao;

    @Enumerated(EnumType.STRING)
    private PrioridadeEnum prioridade;

    @Enumerated(EnumType.STRING)
    private StatusEnum status;

    private Date dataConclusao;

    @ManyToOne
    private Usuario usuario;
}
