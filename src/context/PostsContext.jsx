import { Children } from "react";
import { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext();


export function PostsProvider({children}) {
    const [ posts, setPosts ] = useState(() => {
    const savedPosts = localStorage.getItem("posts")
    if(savedPosts) {
        return JSON.parse(savedPosts)
    }

    return [
        {
            id: 1,
            title: "text text text",
            text: "post post post",
            author: "Viktor"
        },
    ]
    }); 

    useEffect(() => {
        localStorage.setItem(
            "posts",
            JSON.stringify(posts)
        );
    }, [posts]);

    return (
        <PostsContext.Provider value={{posts, setPosts}}>
            {children}
        </PostsContext.Provider>
    );
}

export function usePosts() {
    return useContext(PostsContext);
}
