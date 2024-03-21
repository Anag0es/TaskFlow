package com.example.TaskFlow.service;

import com.example.TaskFlow.model.Usuario;
import com.example.TaskFlow.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario createUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario getUsuarioById(Long id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    public Usuario updateUsuario(Usuario usuario) {
        Usuario existingUsuario = usuarioRepository.findById(usuario.getId()).orElse(null);
        existingUsuario.setNome(usuario.getNome());
        existingUsuario.setEmail(usuario.getEmail());
        existingUsuario.setSenha(usuario.getSenha());
        return usuarioRepository.save(existingUsuario);
    }

    public void deleteUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }
}
