package com.axis.service;

import java.util.List;

import com.axis.model.ProjectManager;
import com.axis.model.ProjectManagerPost;

public interface ProjectManagerService {

	public List<ProjectManager> getAllPmng();

	public ProjectManager getOnePmg(int proj_id);

	public ProjectManager postManager(ProjectManagerPost projectManagerPost, int proj_id);

}
