package com.skilldistillery.eventtracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Playground;
import com.skilldistillery.eventtracker.repositories.PlaygroundRepository;

@Service
public class PlaygroundServiceImpl implements PlaygroundService {

	@Autowired
	private PlaygroundRepository playRepo;

	@Override
	public List<Playground> getAll() {
		
		return playRepo.findAll();
	}

	@Override
	public Playground create(Playground playground) {
		playRepo.saveAndFlush(playground);
		return playground;
	}
	
	
	
	
}
