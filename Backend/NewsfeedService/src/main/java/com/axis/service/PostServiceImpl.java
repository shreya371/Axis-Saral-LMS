package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.fiegnclient.EmployeeClient;
import com.axis.model.Employee;
import com.axis.model.Posts;
import com.axis.model.PostsPost;
import com.axis.model.PostsResponse;
import com.axis.repository.PostRepository;
import com.axis.repository.PostsResponseRepository;
@Service
public class PostServiceImpl implements PostService{

	@Autowired
	PostRepository postRepository;
	
	@Autowired
	EmployeeClient employeeClient;
	
	@Autowired
	PostsResponseRepository postsResponseRepository;
//--------Get All Posts------
	@Override
	public List<PostsResponse> getAllPosts() {
		// TODO Auto-generated method stub
		return postsResponseRepository.getAllPosts();
	}
//--------Get All Posts by EmployeeID------	
	@Override
	public List<Posts> getAllPostByEmplId(int empl_id) {
		// TODO Auto-generated method stub
		return postRepository.getAllPostByEmplId(empl_id);
	}
//Get Post By Post Category-------
	@Override
	public List<Posts> getPostByPostCategory(String epost_category) {
		// TODO Auto-generated method stub
		return postRepository.getPostByPostCategory(epost_category);
	}
//Get Posts by Content--------
	@Override
	public Posts getPostByPostContent(String epost_content) {
		// TODO Auto-generated method stub
		return postRepository.getPostByPostContent(epost_content);
	}
//Get Post by PostId----
	@Override
	public Posts getPostByPostId(int epost_id)
	{
		return postRepository.getPostByPostId(epost_id);
	}

//Get Likes By PostId----
	public int getLikesByPostId(int epost_id)
	{
		return postRepository.getLikesByPostId(epost_id);
	}
	

	//---------Post_id,Post_time,empl_name,post_content,post_category-------
	@Override
	public String post(PostsPost postsPost,int empl_id) {
		
		
		Employee employee = employeeClient.getEmployeeById(empl_id);
		Posts posts=new Posts();
		
		posts.setEpost_content(postsPost.getEpost_content());
//		posts.setEpost_datetime(postsPost.getEpost_datetime());
		posts.setEpost_likes(postsPost.getEpost_likes());
		posts.setEpost_category(postsPost.getEpost_category());
		posts.setEmployee(employee);
		postRepository.save(posts);
		
		PostsResponse pr=new PostsResponse();
		pr.setEmpl_name(employee.getEmpl_name());
		pr.setEmpl_role(employee.getEmpl_role());
		pr.setEpost_content(posts.getEpost_content());
//		pr.setEpost_datetime(posts.getEpost_datetime());
		pr.setEpost_id(posts.getEpost_id());
		
		postsResponseRepository.save(pr);
		
		
		return "posted";
	}
	@Override
	public int likesInc(int epost_id) {
		
		return postRepository.getLikesInc(epost_id);
		
	}
	
	
	
	
	
	//---------Update likes count---------
}
