package com.example.TaskFlow.service;

import com.example.TaskFlow.dto.UsuarioDTO;
import com.example.TaskFlow.model.Usuario;
import com.example.TaskFlow.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();


    public UsuarioDTO createUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = new Usuario();
        usuario.setNome(usuarioDTO.getNome());
        usuario.setEmail(usuarioDTO.getEmail());
        // Aplicar hash na senha antes de salvar
        String senhaHashed = passwordEncoder.encode(usuarioDTO.getSenha());
        usuario.setSenha(senhaHashed);
        usuarioRepository.save(usuario);
        return UsuarioDTO.toDTO(usuario);
    }

    public List<UsuarioDTO> getUsuario( ) {
        List<Usuario> usuarios = usuarioRepository.findAll();
        return usuarios.stream().map(UsuarioDTO::toDTO).collect(Collectors.toList());
    }

    public Usuario getUsuarioById(Long id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    public Usuario updateUsuario(Long id, UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioRepository.findById(id).orElse(null);
        if (usuario != null) {
            if (usuarioDTO.getNome() != null) {
                usuario.setNome(usuarioDTO.getNome());
            }
            if (usuarioDTO.getEmail() != null) {
                usuario.setEmail(usuarioDTO.getEmail());
            }
            if (usuarioDTO.getSenha() != null) {
                usuario.setSenha(usuarioDTO.getSenha());
            }
            usuarioRepository.save(usuario);
        }
        return usuario;
    }

    public Usuario findByEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    public boolean verificarSenha(Usuario usuario, String senha) {
        return passwordEncoder.matches(senha, usuario.getSenha());
    }


    public void deleteUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }
}
