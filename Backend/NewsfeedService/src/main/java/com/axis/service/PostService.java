package com.axis.service;

import java.util.List;


import com.axis.model.Posts;
import com.axis.model.PostsPost;
import com.axis.model.PostsResponse;

public interface PostService {

	public List<PostsResponse> getAllPosts();
	
	public Posts getPostByPostId(int epost_id);
	
	public List<Posts> getAllPostByEmplId(int empl_id);
	
	public List<Posts> getPostByPostCategory(String epost_category);
	
	public Posts getPostByPostContent(String epost_content);
	
	public int getLikesByPostId(int epost_id);

	public String post(PostsPost postsPost, int empl_id);

	public int likesInc(int epost_id);
}
