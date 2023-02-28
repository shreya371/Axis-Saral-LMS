package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.fiegnclient.EmployeeClient;
import com.axis.model.CommentPost;
import com.axis.model.CommentRes;
import com.axis.model.CommentResponse;
import com.axis.model.Comments;
import com.axis.model.Employee;
import com.axis.model.Posts;
import com.axis.repository.CommentRepository;
import com.axis.repository.CommentResRepo;
import com.axis.repository.CommentResponseRepository;
import com.axis.repository.PostRepository;
@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	CommentRepository commentRepository;
	
	@Autowired
	EmployeeClient employeeClient;
	
	@Autowired
	PostRepository postRepository;
	
	@Autowired
	CommentResponseRepository repo;
	
	@Autowired
	CommentResRepo repo1;
	//------------Get All Comments---------
	@Override
	public List<Comments> getAllComments() {
		
		// TODO Auto-generated method stub
		
		System.out.println(repo.getAllComments());
		return commentRepository.getAllComments();
	}

	//--------------Get All Comments By PostId----------------
	@Override
	public List<CommentResponse> getAllCommentsByPostId(int epost_id) {
		// TODO Auto-generated method stub
		System.out.println("hello");
		List<CommentResponse> res=repo.getAllCommentsByPostId(epost_id);
		for (CommentResponse commentResponse : res) {
			System.out.println(commentResponse.toString());
		}
		
		return repo.getAllCommentsByPostId(epost_id);
	}

	@Override
	public String postComment(CommentPost commentPost, int empl_id, int post_id) {
		// TODO Auto-generated method stub
		Employee employee= employeeClient.getEmployeeById(empl_id);
		Posts post =postRepository.findById(post_id).orElse(null);
		Comments comments=new Comments();
	
		comments.setEcmt_content(commentPost.getEcmt_content());
	
		comments.setEmployee(employee);
		comments.setPost(post);
		
		System.out.println(commentPost.toString());
		
		CommentRes cc=new CommentRes();
		cc.setEmpl_name(employee.getEmpl_name());
		cc.setEmpl_role(employee.getEmpl_role());
		cc.setEcmt_content(commentPost.getEcmt_content());
		cc.setEpost_id(post.getEpost_id());
		
		repo1.save(cc);
		
		
		
		
		commentRepository.save(comments);
		
		return "comment posted";
	}

	@Override
	public List<CommentRes> getAllCommentsByPost(int epost_id) {
		
		
		return repo1.getCommentsByPostIdR(epost_id);
	}

	//----------Post Comment_content,Comment_time,Empl_id,epost_id-------------
}
