package com.example.TaskFlow.controller;

import com.example.TaskFlow.config.JwtService;
import com.example.TaskFlow.dto.UsuarioDTO;
import com.example.TaskFlow.model.Usuario;
import com.example.TaskFlow.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<UsuarioDTO> listAll() {
        return usuarioService.getUsuario();
    }

    @PostMapping("/create")
    public UsuarioDTO createUsuario(@RequestBody UsuarioDTO usuarioDTO) {
        return usuarioService.createUsuario(usuarioDTO);
    }

    @GetMapping("/{id}")
    public UsuarioDTO getUsuarioById(@PathVariable Long id) {
        return UsuarioDTO.toDTO(usuarioService.getUsuarioById(id));
    }

    @PutMapping("/update/{id}")
    public UsuarioDTO updateUsuario(@PathVariable Long id, @RequestBody UsuarioDTO usuarioDTO) {
        return UsuarioDTO.toDTO(usuarioService.updateUsuario(id, usuarioDTO));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUsuario(@PathVariable Long id) {
        usuarioService.deleteUsuario(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioService.findByEmail(usuarioDTO.getEmail());
        if (usuario == null || !usuarioService.verificarSenha(usuario, usuarioDTO.getSenha())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        String token = new JwtService().generateToken(usuario.getId().toString());
        return ResponseEntity.ok().body(token);
    }


}
