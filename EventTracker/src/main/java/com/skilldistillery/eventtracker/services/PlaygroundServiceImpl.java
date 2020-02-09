package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

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

	@Override
	public boolean delete(Integer pid) {
		Playground playground = null;
		Optional <Playground> playgroundOpt = playRepo.findById(pid);
		if(playgroundOpt.isPresent()) {
			playground = playgroundOpt.get();
			playRepo.delete(playground);
			return true;
		}
		
		return false;
	}
	
	
	
	
	
	
}
