package com.example.TaskFlow.repository;

import com.example.TaskFlow.model.StatusEnum;
import com.example.TaskFlow.model.Tarefas;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TarefasRepository extends JpaRepository<Tarefas, Long>{

    List<Tarefas> findByStatus(StatusEnum status);

}
