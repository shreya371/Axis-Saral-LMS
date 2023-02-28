package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.CommentPost;
import com.axis.model.CommentRes;
import com.axis.model.CommentResponse;
import com.axis.model.Comments;
import com.axis.service.CommentService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/ms4")
public class CommentController {

	@Autowired
	CommentService commentService;
	//------------Get All Comments---------
	@GetMapping("/comments/g1")
		public List<Comments> getAllComments() {
			
			return commentService.getAllComments();
		}
	//--------------Get All Comments By PostId----------------
	@GetMapping("/comments/g2/{epost_id}")
		public List<CommentResponse> getAllCommentsByPostId(@PathVariable int epost_id) {
			// TODO Auto-generated method stub
			return commentService.getAllCommentsByPostId(epost_id);
		}
   //----------Post Comment_content,Comment_time,Empl_id,epost_id-------------
	
	@PostMapping("/comments/postcmt/{empl_id}/{post_id}")
	public String postComment(@RequestBody CommentPost commentPost,@PathVariable int empl_id,@PathVariable int post_id) {
		return commentService.postComment(commentPost,empl_id,post_id);
	}
//------------------------------------------------------------------------------------------	
	@GetMapping("/comments/get/{epost_id}")
	public List<CommentRes> getCommentsByPost(@PathVariable int epost_id){
		return commentService.getAllCommentsByPost(epost_id);
	}}
	
