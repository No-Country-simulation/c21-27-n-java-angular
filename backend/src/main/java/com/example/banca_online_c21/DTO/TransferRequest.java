package com.example.banca_online_c21.DTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;

@Data
@Getter
@Setter
public class TransferRequest {

    @NotBlank(message = "El número de cuenta de origen no puede estar vacío.")
    @Pattern(regexp = "^[JAOB][0-9]{4}[JAOB][0-9]{4}[JAOB][0-9]{4}[JAOB]$", message = "El número de cuenta de destino debe tener el formato correcto.")
    private String sourceAccount; // Número de cuenta de origen

    @NotBlank(message = "El número de cuenta de destino no puede estar vacío.")
    @Pattern(regexp = "^[JAOB][0-9]{4}[JAOB][0-9]{4}[JAOB][0-9]{4}[JAOB]$", message = "El número de cuenta de destino debe tener el formato correcto.")
    private String destinationAccount; // Número de cuenta de destino

    @NotNull(message = "El monto no puede ser nulo.")
    @Positive(message = "El monto debe ser mayor a 0.")
    private Double amount; // Monto a transferir

    private String description; // Descripción de la transferencia (opcional)

    // Getters y Setters

}
