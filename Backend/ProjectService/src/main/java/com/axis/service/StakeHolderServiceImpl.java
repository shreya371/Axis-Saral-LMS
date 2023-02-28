package com.axis.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.exception.StakeHolderNotFoundException;
import com.axis.model.Project;
import com.axis.model.StakeHolder;
import com.axis.model.StakeHolderPost;
import com.axis.repository.ProjectRepository;
import com.axis.repository.StakeHolderRepository;
import com.axis.util.AppConstants;
@Service
public class StakeHolderServiceImpl implements StakeHolderService{

	@Autowired
	StakeHolderRepository stakeHolderRepository;
	
	@Autowired
	ProjectRepository projectRepository;
	@Override
	public List<StakeHolder> getAllSthl() {
		// TODO Auto-generated method stub
		List<StakeHolder> stakeholder= stakeHolderRepository.findAll();
		if(stakeholder.size()==0) {
			throw new StakeHolderNotFoundException(AppConstants.Stake_Holder_Not_Found_Message);
		}
		return stakeholder;
	}
	@Override
	public Optional<StakeHolder> getSthlById(int sthd_id) {
		// TODO Auto-generated method stub
		Optional<StakeHolder> stakeholder= stakeHolderRepository.findById(sthd_id);
		if(stakeholder.isEmpty()) {
			throw new StakeHolderNotFoundException(AppConstants.Stake_Holder_Not_Found_Message);
		}
		return stakeholder;
	
	}
	@Override
	public List<StakeHolder> getAllByProjectId(int project_proj_id) {
		List<StakeHolder> stakeholder= stakeHolderRepository.getAllByProjectIdRepo(project_proj_id);
		if(stakeholder.size()==0) {
			throw new StakeHolderNotFoundException(AppConstants.Empty_List_Message);
		}
		return stakeholder;
		
		
	}
	@Override
	public StakeHolder postStakeholder(StakeHolderPost stakeHolderPost, int proj_id) {
		Project project=projectRepository.findById(proj_id).orElse(null);//exception project not found
		StakeHolder st=new StakeHolder();
		st.setSthd_name(stakeHolderPost.getSthd_name());
		st.setSthd_code(stakeHolderPost.getSthd_code());
		st.setSthd_desg(stakeHolderPost.getSthd_desg());
		st.setSthd_propic(stakeHolderPost.getSthd_propic());
		st.setSthd_email(stakeHolderPost.getSthd_email());
		st.setSthd_contact(stakeHolderPost.getSthd_contact());
		
		st.setProject(project);
		stakeHolderRepository.save(st);
		return st;
	}
	
	
	

}
