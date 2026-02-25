package com.codecollab;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/")
    public String home() {
        return "CodeCollab Backend Running 🚀";
    }

    @GetMapping("/health")
    public String health() {
        return "Backend is live 🚀";
    }
}