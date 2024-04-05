package com.example.TaskFlow.model;

public enum PrioridadeEnum {
    BAIXA, MEDIA, ALTA;

    public static PrioridadeEnum getEnum(String value) {
        for (PrioridadeEnum v : values()) {
            if (v.name().equalsIgnoreCase(value)) {
                return v;
            }
        }
        throw new IllegalArgumentException("Prioridade inválida: " + value);
    }
}

