package com.axis.service;

import java.util.List;
import java.util.Optional;

import com.axis.model.StakeHolder;
import com.axis.model.StakeHolderPost;

public interface StakeHolderService {

	public List<StakeHolder> getAllSthl();

	public Optional<StakeHolder> getSthlById(int sthd_id);

	public List<StakeHolder> getAllByProjectId(int project_proj_id);

	public StakeHolder postStakeholder(StakeHolderPost stakeHolderPost, int proj_id);

}
