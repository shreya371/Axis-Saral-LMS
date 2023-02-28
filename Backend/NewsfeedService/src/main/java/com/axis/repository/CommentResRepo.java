package com.axis.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.axis.model.CommentRes;
@Repository
public interface CommentResRepo extends JpaRepository<CommentRes, Integer>{
	@Query(value="select p.empl_name,c.ecmt_content,p.empl_role from employee p INNER JOIN ecomment c ON p.empl_id=c.ecomment_empl_id WHERE c.employee_post_epost_id= :value",nativeQuery = true)
	public List<CommentRes> getCommentsByPostR(@Param("value") int epost_id);
	
	
	@Query(value="select * from comment_res where epost_id = :value",nativeQuery = true)
	public List<CommentRes> getCommentsByPostIdR(@Param("value") int epost_id);
	
	

}
