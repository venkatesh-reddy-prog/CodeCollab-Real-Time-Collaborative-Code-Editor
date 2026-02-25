package com.codecollab.controller;

import com.codecollab.model.Room;
import com.codecollab.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;

@RestController
@RequestMapping("/api/rooms")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class RoomController {

    private final RoomService roomService;

    @PostMapping("/create")
    public Room createRoom(Principal principal) {
        return roomService.createRoom(principal.getName());
    }

    @GetMapping("/{roomCode}")
    public Room getRoom(@PathVariable String roomCode) {
        return roomService.getRoom(roomCode);
    }
}