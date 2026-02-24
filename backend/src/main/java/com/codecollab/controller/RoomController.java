package com.codecollab.controller;

import com.codecollab.model.Room;
import com.codecollab.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rooms")
@RequiredArgsConstructor
@CrossOrigin
public class RoomController {

    private final RoomService roomService;

    @PostMapping("/create")
    public Room createRoom(@RequestParam String owner) {
        return roomService.createRoom(owner);
    }

    @GetMapping("/{roomCode}")
    public Room getRoom(@PathVariable String roomCode) {
        return roomService.getRoom(roomCode);
    }
}