package com.axis.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.StakeHolder;
import com.axis.model.StakeHolderPost;
import com.axis.service.StakeHolderService;

@RestController
@RequestMapping("/ms1")
public class StakeHolderController {
	
	@Autowired
	StakeHolderService stakeHolderService;
	
	
	//---------get all stake holders----------------
	@GetMapping("/sthd/g1")
	public List<StakeHolder> getAllSthl(){
		return stakeHolderService.getAllSthl();
	}
	
	//get single stake holder by stake holder id------------
	@GetMapping("/sthd/g2/{sthd_id}")
	public Optional<StakeHolder> getSthlById(@PathVariable int sthd_id) {
		return stakeHolderService.getSthlById(sthd_id);
		
	}
	
	
	@GetMapping("/sthd/g3/{project_proj_id}")
	public List<StakeHolder> getAllByProjectId(@PathVariable int project_proj_id){
		return stakeHolderService.getAllByProjectId(project_proj_id);
		
	}
	
	@PostMapping("/sthd/post/{proj_id}")
	public StakeHolder postStakeholder(@RequestBody StakeHolderPost stakeHolderPost,@PathVariable int proj_id) {
		return stakeHolderService.postStakeholder(stakeHolderPost,proj_id);
	}
	
	
	
	
	
	

}
