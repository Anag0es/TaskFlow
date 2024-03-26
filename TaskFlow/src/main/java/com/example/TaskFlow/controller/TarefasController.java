package com.example.TaskFlow.controller;

import com.example.TaskFlow.config.AuthMiddleware;
import com.example.TaskFlow.dto.TarefasDTO;
import com.example.TaskFlow.model.Usuario;
import com.example.TaskFlow.repository.UsuarioRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.TaskFlow.service.TarefasService;

import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class TarefasController {

    @Autowired
    private TarefasService tarefasService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public List<TarefasDTO> listAll() {
        return tarefasService.getTarefas();
    }

    @PostMapping("/create")
    public TarefasDTO createTarefas(HttpServletRequest request, @RequestBody TarefasDTO tarefasDTO) {
        Usuario usuario = AuthMiddleware.verifyToken(request, usuarioRepository);
        tarefasDTO.setUsuarioId(usuario.getId());
        return tarefasService.createTarefas(tarefasDTO, usuario);
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

    @GetMapping("/status/{status}")
    public List<TarefasDTO> getTarefasByStatus(@PathVariable String status) {
        return tarefasService.getTarefasByStatus(status);
    }

    @PatchMapping("/updateStatus/{id}")
    public TarefasDTO updateStatus(@PathVariable Long id, @RequestBody String novoStatus) {
        return tarefasService.updateStatus(id, novoStatus);
    }



}
