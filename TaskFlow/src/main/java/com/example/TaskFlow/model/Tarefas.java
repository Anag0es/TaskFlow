package com.example.TaskFlow.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "tarefas")
@Getter
@Setter
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

    private LocalDate dataConclusao;

    private LocalDate dataCriacao;

    @PrePersist
    @PreUpdate
    private void preUpdate() {
        dataCriacao = LocalDate.now();
    }

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
}
