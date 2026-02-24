package com.codecollab.service;

import com.codecollab.model.Room;
import com.codecollab.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public Room createRoom(String owner) {
        Room room = new Room();
        room.setOwner(owner);
        room.setRoomCode(generateRoomCode());
        return roomRepository.save(room);
    }

    public Room getRoom(String roomCode) {
        return roomRepository.findByRoomCode(roomCode)
                .orElseThrow(() -> new RuntimeException("Room not found"));
    }

    private String generateRoomCode() {
        return UUID.randomUUID().toString().substring(0, 8);
    }
}