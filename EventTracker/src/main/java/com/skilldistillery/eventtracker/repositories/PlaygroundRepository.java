package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Playground;

public interface PlaygroundRepository extends JpaRepository<Playground, Integer>{
	
	

}
