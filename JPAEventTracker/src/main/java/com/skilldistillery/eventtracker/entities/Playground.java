package com.skilldistillery.eventtracker.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Playground {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int id;

	
	private String name;
	
	private Boolean visited;
	
	private String location;
	
	private String rating;
	
	private String description;
	
	private String atmosphere;
	
	private String image;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Boolean getVisited() {
		return visited;
	}

	public void setVisited(Boolean visited) {
		this.visited = visited;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	

	public String getAtmosphere() {
		return atmosphere;
	}

	public void setAtmosphere(String atmosphere) {
		this.atmosphere = atmosphere;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Event [id=" + id + ", name=" + name + ", visited=" + visited + ", location=" + location + ", rating="
				+ rating + ", description=" + description + ", atmosphere=" + atmosphere + ", image=" + image + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((image == null) ? 0 : image.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Playground other = (Playground) obj;
		if (image == null) {
			if (other.image != null)
				return false;
		} else if (!image.equals(other.image))
			return false;
		return true;
	}

	public Playground(String name, Boolean visited, String location, String rating, String description,
			String atmosphere, String image) {
		super();
		this.name = name;
		this.visited = visited;
		this.location = location;
		this.rating = rating;
		this.description = description;
		this.atmosphere = atmosphere;
		this.image = image;
	}

	public Playground() {
		super();
	}
	
	
}
