package com.axis.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.axis.model.Posts;
import com.axis.model.PostsResponse;
@Repository
public interface PostRepository extends JpaRepository<Posts, Integer>{
//--------Get All Posts------
	@Query(value="select * posts_response",nativeQuery = true)
	public List<PostsResponse> getAllPosts();
	
//--------Get All Posts by EmployeeID------	
	@Query(value="select c.epost_datetime,c.epost_content,p.empl_id from employee p INNER JOIN employee_post c ON p.empl_id=c.employee_empl_id WHERE c.epost_id=:value",nativeQuery=true)
	public List<Posts> getAllPostByEmplId(@Param("value")int empl_id);

	
//Get Post By Post Category-------
	@Query(value="select * from employee_post where epost_category=:value",nativeQuery = true)
	public List<Posts> getPostByPostCategory(@Param("value")String epost_category);
	
	
//Get Posts by Content--------
	@Query(value="select * from employee_post where epost_content=:value",nativeQuery = true)
	public Posts getPostByPostContent(@Param("value")String epost_content);

//Get Post By PostId----
	@Query(value="select * from employee_post where epost_id=:value",nativeQuery = true)
	public Posts getPostByPostId(@Param("value")int epost_id);
	
//Get Likes by PostId----
	@Query(value="SELECT epost_likes FROM employee_post where epost_id=:value",nativeQuery = true)
	public int getLikesByPostId(@Param("value")int epost_id);
	
	
	
	
	
	
	//likes inccc Likes by PostId----
	@Modifying
	@Query(value="UPDATE employee_post p SET p.epost_likes=(p.epost_likes+1) WHERE epost_id=:value",nativeQuery = true)
	@Transactional
	public int getLikesInc(@Param("value")int epost_id);
	
	
	
}
