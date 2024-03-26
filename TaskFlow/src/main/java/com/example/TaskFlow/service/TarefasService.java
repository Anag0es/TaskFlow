package com.example.TaskFlow.service;

import com.example.TaskFlow.dto.TarefasDTO;
import com.example.TaskFlow.model.PrioridadeEnum;
import com.example.TaskFlow.model.StatusEnum;
import com.example.TaskFlow.model.Tarefas;
import com.example.TaskFlow.model.Usuario;
import com.example.TaskFlow.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;

import com.example.TaskFlow.repository.TarefasRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TarefasService {

    @Autowired
    private TarefasRepository tarefasRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public TarefasDTO createTarefas(TarefasDTO tarefasDTO) {
        Tarefas tarefas = new Tarefas();
        tarefas.setTitulo(tarefasDTO.getTitulo());
        tarefas.setDescricao(tarefasDTO.getDescricao());
        tarefas.setPrioridade(PrioridadeEnum.valueOf(tarefasDTO.getPrioridade()));
        tarefas.setStatus(StatusEnum.valueOf(tarefasDTO.getStatus()));
        tarefas.setDataConclusao(tarefasDTO.getDataConclusao());
        tarefas.setDataCriacao(LocalDate.now());

        if (tarefasDTO.getUsuarioId() != null) {
            Usuario usuario = usuarioRepository.findById(tarefasDTO.getUsuarioId())
                    .orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));
            tarefas.setUsuario(usuario);
        }
        tarefasRepository.save(tarefas);
        return TarefasDTO.toDTO(tarefas);
    }


    public List<TarefasDTO> getTarefas() {
        List<Tarefas> tarefas = tarefasRepository.findAll();
        return tarefas.stream().map(TarefasDTO::toDTO).collect(Collectors.toList());
    }

    public Tarefas getTarefasById(Long id) {
        return tarefasRepository.findById(id).orElseThrow(() -> new RuntimeException("Tarefa não encontrada!"));
    }

    public Tarefas updateTarefas(Long id, TarefasDTO tarefas){
        Tarefas existingTarefas = tarefasRepository.findById(id).orElseThrow(() -> new RuntimeException("Tarefa não encontrada!"));
        if (tarefas.getTitulo() != null) {
            existingTarefas.setTitulo(tarefas.getTitulo());
        }
        if (tarefas.getDescricao() != null) {
            existingTarefas.setDescricao(tarefas.getDescricao());
        }
        if (tarefas.getPrioridade() != null) {
            existingTarefas.setPrioridade(PrioridadeEnum.valueOf(tarefas.getPrioridade()));
        }
        if (tarefas.getStatus() != null) {
            existingTarefas.setStatus(StatusEnum.valueOf(tarefas.getStatus()));
        }
        if (tarefas.getDataCriacao() != null) {
            existingTarefas.setDataCriacao(tarefas.getDataCriacao()); // Definindo a nova data de criação
        }
        if (tarefas.getDataConclusao() != null) {
            existingTarefas.setDataConclusao(tarefas.getDataConclusao()); // Definindo a nova data de conclusão
        }
        if (tarefas.getUsuarioId() != null) {
            existingTarefas.setUsuario(tarefasRepository.findById(tarefas.getUsuarioId()).orElseThrow(() -> new RuntimeException("Usuário não encontrado!")).getUsuario());
        }
        return tarefasRepository.save(existingTarefas);
    }

    public TarefasDTO updateStatus(Long id, String novoStatus) {
        Tarefas tarefa = tarefasRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada!"));

        tarefa.setStatus(StatusEnum.valueOf(novoStatus));
        tarefasRepository.save(tarefa);

        return TarefasDTO.toDTO(tarefa);
    }

    public List<TarefasDTO> getTarefasByStatus(String status) {
        List<Tarefas> tarefas = tarefasRepository.findByStatus(StatusEnum.valueOf(status));
        return tarefas.stream().map(TarefasDTO::toDTO).collect(Collectors.toList());
    }




    public void deleteTarefas(Long id) {
        tarefasRepository.deleteById(id);
    }



}
