package com.example.TaskFlow.model;

public enum StatusEnum {
    PENDENTE, EM_ANDAMENTO, CONCLUIDA;

    public static StatusEnum getEnum(String value) {
        for (StatusEnum v : values()) {
            if (v.name().equalsIgnoreCase(value)) {
                return v;
            }
        }
        throw new IllegalArgumentException("Status inválida: " + value);
    }

}
