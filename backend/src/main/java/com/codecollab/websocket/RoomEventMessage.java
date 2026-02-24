package com.codecollab.websocket;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoomEventMessage {

    private String roomId;
    private String user;
    private String eventType; // JOIN / LEAVE
}