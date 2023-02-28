package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.Posts;
import com.axis.model.PostsPost;
import com.axis.model.PostsResponse;
import com.axis.service.PostService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/ms4")
public class PostController {

	@Autowired
	PostService postService;
	//--------Get All Posts------
		@GetMapping("/posts/g1")
		public List<PostsResponse> getAllPosts() {
			
			return postService.getAllPosts();
		}
	//--------Get All Posts by EmployeeID------	
		@GetMapping("/posts/g2/{empl_id}")
		public List<Posts> getAllPostByEmplId( @PathVariable int empl_id) {
			
			return postService.getAllPostByEmplId(empl_id);
		}
	//Get Post By Post Category-------
		@GetMapping("/posts/g3/{epost_category}")
		public List<Posts> getPostByPostCategory(@PathVariable String epost_category) {
			
			return postService.getPostByPostCategory(epost_category);
		}
	//Get Posts by Content--------
		@GetMapping("/posts/g4")
		public Posts getPostByPostContent(String epost_content) {
			
			return postService.getPostByPostContent(epost_content);
		}
	//get Post by PostId----

		@GetMapping("/posts/g5")
		public Posts getPostByPostId(int epost_id)
		{
			return postService.getPostByPostId(epost_id);
		}

		//Get Likes By PostId----
		@GetMapping("/posts/g6/{epost_id}")
		public int getLikesByPostId(@PathVariable int epost_id)
		{
			return postService.getLikesByPostId(epost_id);
		}
	   //------------Post_id,Post_time,empl_name,post_content,post_category-------
		
		@PutMapping("/posts/g7/{epost_id}")
		public int likesInc(@PathVariable int epost_id) {
			return postService.likesInc(epost_id);
		}
		
		//---------Update likes count---------
		
		@PostMapping("/posts/post/{empl_id}")
		public String post(@RequestBody PostsPost postsPost,@PathVariable int empl_id) {
			return postService.post(postsPost,empl_id);	
		}
}
