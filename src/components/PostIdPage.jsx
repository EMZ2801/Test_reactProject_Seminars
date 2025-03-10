import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] =  useState ({});
    const [comments,setComments] = useState ([]);
    const[fetchPostById, isLoading, error] = useFetching (async(id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    });

    const[fetchComments, isComLoading, comError] = useFetching (async(id) => {
        const response = await PostService.getCommentsByPostId(id);
        console.log("Ответ от сервера:", response.data); 
        setComments(response.data)
    });

    useEffect(() => { 
        fetchPostById(params.id)
        fetchComments (params.id)
    }, [params.id])

    return (
        <div>
            <h1> вы открыли страницу семинара c ID = {params.id} </h1>
            {isLoading
            ? <Loader/>
            : <h2> Название: {post.title} </h2> 
            }
            <h2> 
               Подробнее о семинаре:
            </h2>
            {isComLoading
                ?<Loader/>
                : <div>                    
                    <h2>{post.description}</h2>
                    <h3>Дата семинара: {post.date} </h3>
                    <p> Время начала семинара: {post.time} </p>
                </div>
               }    
        </div>
  )
}

export default PostIdPage
