package com.example.TaskFlow.repository;

import com.example.TaskFlow.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
}
