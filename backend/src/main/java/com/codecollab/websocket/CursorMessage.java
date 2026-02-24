package com.codecollab.websocket;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CursorMessage {

    private String roomId;
    private String user;
    private int line;
    private int column;
}