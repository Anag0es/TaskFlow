package com.example.TaskFlow.controller;

import com.example.TaskFlow.dto.TarefasDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.TaskFlow.service.TarefasService;

import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class TarefasController {

    @Autowired
    private TarefasService tarefasService;

    @GetMapping
    public List<TarefasDTO> listAll() {
        return tarefasService.getTarefas();
    }

    @PostMapping("/create")
    public TarefasDTO createTarefas(@RequestBody TarefasDTO tarefasDTO) {
        return tarefasService.createTarefas(tarefasDTO);
    }

    @GetMapping("/{id}")
    public TarefasDTO getTarefasById(@PathVariable Long id) {
        return TarefasDTO.toDTO(tarefasService.getTarefasById(id));
    }

    @PutMapping("/update/{id}")
    public TarefasDTO updateTarefas(@PathVariable Long id, @RequestBody TarefasDTO tarefasDTO) {
        return TarefasDTO.toDTO(tarefasService.updateTarefas(id, tarefasDTO));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTarefas(@PathVariable Long id) {
        tarefasService.deleteTarefas(id);
    }

}
