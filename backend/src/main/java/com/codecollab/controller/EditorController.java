package com.codecollab.controller;

import com.codecollab.model.CodeSnapshot;
import com.codecollab.service.EditorService;
import com.codecollab.websocket.CodeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.*;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@CrossOrigin
public class EditorController {

    private final EditorService editorService;
    private final SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/edit")
    public void syncCode(CodeMessage message) {
        editorService.saveSnapshot(message.getRoomId(), message.getCode());
        messagingTemplate.convertAndSend(
            "/topic/code/" + message.getRoomId(), 
            message
        );
    }

    @GetMapping("/api/history/{roomId}")
    @ResponseBody
    public List<CodeSnapshot> getHistory(@PathVariable String roomId) {
        return editorService.getHistory(roomId);
    }
}