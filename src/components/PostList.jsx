import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: "center" }}>Семинары не найдены!</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>
            {posts.map ((post, index) => (
                <PostItem key={post.id} remove={remove} number={index + 1} post={post} />)
      )}      
        </div>
    );
};

export default PostList;
