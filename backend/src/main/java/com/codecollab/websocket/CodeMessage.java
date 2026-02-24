package com.codecollab.websocket;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CodeMessage {

    private String roomId;   // Room where editing happens
    private String code;     // Latest code content
    private String user;     // Username who edited
    private String type;     // EDIT / JOIN / LEAVE
}