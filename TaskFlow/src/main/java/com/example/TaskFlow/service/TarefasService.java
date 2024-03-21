package com.example.TaskFlow.service;

import com.example.TaskFlow.model.Tarefas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TaskFlow.repository.TarefasRepository;

import java.time.LocalDate;

@Service
public class TarefasService {

    @Autowired
    private TarefasRepository tarefasRepository;

    public Tarefas createTarefas(Tarefas tarefas) {
        return tarefasRepository.save(tarefas);
    }

    public Tarefas getTarefas() {
        return tarefasRepository.findAll().get(0);
    }

    public Tarefas getTarefasById(Long id) {
        return tarefasRepository.findById(id).orElseThrow(() -> new RuntimeException("Tarefa não encontrada!"));
    }

    public Tarefas updateTarefas(Tarefas tarefas) {
        Tarefas existingTarefas = tarefasRepository.findById(tarefas.getId()).orElseThrow(() -> new RuntimeException("Tarefa não encontrada!"));
        existingTarefas.setTitulo(tarefas.getTitulo());
        existingTarefas.setDescricao(tarefas.getDescricao());
        existingTarefas.setPrioridade(tarefas.getPrioridade());
        existingTarefas.setStatus(tarefas.getStatus());
        existingTarefas.setDataConclusao(tarefas.getDataConclusao());
        return tarefasRepository.save(existingTarefas);
    }

    public void deleteTarefas(Long id) {
        tarefasRepository.deleteById(id);
    }



}
