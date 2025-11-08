import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts' });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    try {
        const newPost = new PostMessage(post);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post' });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    
    if(mongoose.Types.ObjectId.isValid(_id)) {
        try {
            const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
            res.status(200).json(updatedPost);
        } catch (error) {
            res.status(500).json({ message: 'Error updating post' });
        }
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await PostMessage.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post' });
    }
}

export const likePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }
    try {
        const post = await PostMessage.findById(id);
        post.likeCount += 1;
        const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: 'Error liking post' });
    }
}