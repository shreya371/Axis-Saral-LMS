package com.axis.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.axis.model.Posts;
import com.axis.model.PostsResponse;

@Repository
public interface PostsResponseRepository extends JpaRepository<PostsResponse, String>{
	@Query(value="select *from posts_response order by postres_id desc",nativeQuery = true)
	public List<PostsResponse> getAllPosts();
//	select c.epost_datetime,c.epost_content,  c.epost_id,p.empl_id,p.empl_name,p.empl_role,po.postres_id from employee p INNER JOIN employee_post c ON p.empl_id=c.employee_empl_id inner JOIN posts_response po
	

}
