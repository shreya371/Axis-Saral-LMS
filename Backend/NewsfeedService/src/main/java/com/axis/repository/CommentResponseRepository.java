package com.axis.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.axis.model.CommentResponse;
@Repository
public interface CommentResponseRepository extends JpaRepository<CommentResponse, String>{
	@Query(value="select c.ecmt_datetime,c.ecmt_content,p.empl_name,p.empl_role from employee p INNER JOIN ecomment c ON p.empl_id=c.ecomment_empl_id",nativeQuery = true)
	public List<CommentResponse> getAllComments();
	
	@Query(value="select c.ecmt_datetime,c.ecmt_content,p.empl_name,p.empl_role from employee p INNER JOIN ecomment c ON p.empl_id=c.ecomment_empl_id WHERE c.employee_post_epost_id= :value",nativeQuery = true)
	public List<CommentResponse> getAllCommentsByPostId(@Param("value")int epost_id);

}
