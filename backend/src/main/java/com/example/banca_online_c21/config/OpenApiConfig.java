package com.example.banca_online_c21.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "OinkBank API",
                version = "1.0",
                description = "Documentation for endpoints in OinkBank"
        )
)
public class OpenApiConfig {
}
