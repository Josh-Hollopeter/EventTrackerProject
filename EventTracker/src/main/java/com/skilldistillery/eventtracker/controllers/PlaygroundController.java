package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Playground;
import com.skilldistillery.eventtracker.services.PlaygroundService;

@RequestMapping("api")
@RestController
public class PlaygroundController {
	
	@Autowired
	PlaygroundService playServ;
	
	
	
	@GetMapping("playgrounds")
	public List<Playground> getAll(){
		return playServ.getAll();
	}

}
