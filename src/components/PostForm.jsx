import React, { useState } from 'react' // rafce
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const PostForm = ({create}) => {

    const [post, setPost] = useState ({title:"", description:""});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create (newPost)
        setPost ({title:"", description:""});
      }

  return (
   
        <form>
          <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type='text'
          placeholder="Название семинара"/>

          <MyInput 
          value={post.description}
          onChange={e => setPost({...post, description: e.target.value})}
          type='text'
          placeholder="Описание семинара" />

          <MyInput 
          value={post.date}
          onChange={e => setPost({...post, description: e.target.value})}
          type='text'
          placeholder="Дата проведения семинара" />

            <MyInput 
          value={post.time}
          onChange={e => setPost({...post, description: e.target.value})}
          type='text'
          placeholder="Время начала семинара" />


          <MyButton onClick={addNewPost}> Добавить </MyButton>
      </form>
      
  )
}

export default PostForm

