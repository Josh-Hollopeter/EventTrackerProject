package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("playgrounds")
	public Playground create(@RequestBody Playground playground, HttpServletResponse response ) {
		System.err.println(playground);
		if(playServ.create(playground) != null) {
			response.setStatus(201);
			return playground;
		}
		response.setStatus(400);
		return null;
		
	}
	
	@DeleteMapping("playgrounds/{pid}")
	public void delete(@PathVariable Integer pid, HttpServletResponse response) {
		System.err.println("****************" + pid);
		if(playServ.delete(pid)) {
			response.setStatus(204);
			
		}else {
			response.setStatus(400);
		}
	}

}


