package com.example.TaskFlow.config;

import com.example.TaskFlow.model.Usuario;
import com.example.TaskFlow.repository.UsuarioRepository;
import jakarta.servlet.http.HttpServletRequest;

public class AuthMiddleware {
    public static Usuario verifyToken(HttpServletRequest request, UsuarioRepository usuarioRepository) {
        String token = request.getHeader("Authorization");
        if (token == null || !token.startsWith("Bearer ")) {
            throw new RuntimeException("Token inválido ou ausente.");
        }
        String userId = new JwtService().validateTokenAndGetUserId(token.substring(7)); // Remove "Bearer " do token
        if (userId.equals("Token inválido")) {
            throw new RuntimeException("Token inválido.");
        }
        return usuarioRepository.findById(Long.parseLong(userId))
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));
    }
}
