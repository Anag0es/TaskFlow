package com.example.TaskFlow.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import com.example.TaskFlow.model.Usuario;

@Getter
@AllArgsConstructor
public class UsuarioDTO {
    private Long id;
    private String nome;
    private String email;
    private String senha;

    public static UsuarioDTO toDTO(Usuario usuario) {
        return new UsuarioDTO(
                usuario.getId(),
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getSenha());
    }
}
