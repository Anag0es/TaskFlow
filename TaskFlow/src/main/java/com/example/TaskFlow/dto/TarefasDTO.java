package com.example.TaskFlow.dto;

import com.example.TaskFlow.model.Tarefas;
import com.example.TaskFlow.model.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
public class TarefasDTO {

    private Long id;
    private String titulo;
    private String descricao;
    private String prioridade;
    private String status;
    private LocalDate dataCriacao;
    private LocalDate dataConclusao;
    private Long usuarioId;

    public static TarefasDTO toDTO(Tarefas tarefas) {
        Long usuarioId = null;
        if (tarefas.getUsuario() != null) {
            usuarioId = tarefas.getUsuario().getId();
        }
        return new TarefasDTO(
                tarefas.getId(),
                tarefas.getTitulo(),
                tarefas.getDescricao(),
                tarefas.getPrioridade().name(),
                tarefas.getStatus().name(),
                tarefas.getDataCriacao(),
                tarefas.getDataConclusao(),
                usuarioId
        );
    }

}
