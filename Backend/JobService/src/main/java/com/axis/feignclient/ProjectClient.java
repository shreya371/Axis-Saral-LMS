package com.axis.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.axis.model.Project;

@FeignClient(name="PROJECT-SERVICE")
public interface ProjectClient {
	@GetMapping("/ms1/proj/g3/{proj_id}")
	public Project getOneProjectById(@PathVariable int proj_id);

	

}
