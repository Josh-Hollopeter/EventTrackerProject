package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Playground;

public interface PlaygroundService {
	
	List <Playground> getAll();
	
	Playground create(Playground playground);

}
