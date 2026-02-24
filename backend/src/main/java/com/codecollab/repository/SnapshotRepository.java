package com.codecollab.repository;

import com.codecollab.model.CodeSnapshot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SnapshotRepository extends JpaRepository<CodeSnapshot, Long> {

    List<CodeSnapshot> findByRoomIdOrderBySavedAtDesc(String roomId);
}