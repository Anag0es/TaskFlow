package com.example.TaskFlow.config;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;

import java.net.URI;
import java.util.Date;

public class JwtService {

    private static final String SECRET = "ana2024"; // Use um segredo real e seguro aqui
    private static final String ISSUER = "admin";
    private static final long EXPIRATION_TIME = 900_000; // 15 minutos em milissegundos

    public String generateToken(String userId) {
        return JWT.create()
                .withSubject("User Details")
                .withClaim("userId", userId)
                .withIssuer(ISSUER)
                .withIssuedAt(new Date())
                .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(SECRET));
    }

    public String validateTokenAndGetUserId(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC512(SECRET);
            JWTVerifier verifier = JWT.require(algorithm)
                    .withIssuer(ISSUER)
                    .build();
            DecodedJWT jwt = verifier.verify(token);
            return jwt.getClaim("userId").asString();
        } catch (JWTVerificationException exception){
            String a = "Token inválido";
            return a;
        }
    }
}
