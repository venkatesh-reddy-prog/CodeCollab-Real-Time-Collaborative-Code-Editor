package com.codecollab.service;

import com.codecollab.model.CodeSnapshot;
import com.codecollab.repository.SnapshotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EditorService {

    private final SnapshotRepository snapshotRepository;

    public void saveSnapshot(String roomId, String code) {
        CodeSnapshot snapshot = new CodeSnapshot();
        snapshot.setRoomId(roomId);
        snapshot.setCode(code);
        snapshot.setSavedAt(LocalDateTime.now());
        snapshotRepository.save(snapshot);
    }

    public List<CodeSnapshot> getHistory(String roomId) {
        return snapshotRepository.findByRoomIdOrderBySavedAtDesc(roomId);
    }
}