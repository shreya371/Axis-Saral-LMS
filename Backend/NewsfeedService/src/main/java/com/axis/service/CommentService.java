package com.axis.service;

import java.util.List;

import com.axis.model.CommentPost;
import com.axis.model.CommentRes;
import com.axis.model.CommentResponse;
import com.axis.model.Comments;

public interface CommentService {

	public List<Comments> getAllComments();
	
	public List<CommentResponse> getAllCommentsByPostId(int epost_id);

	public String postComment(CommentPost commentPost, int empl_id, int post_id);

	public List<CommentRes> getAllCommentsByPost(int epost_id);
}
