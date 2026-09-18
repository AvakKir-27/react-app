import { useState } from "react";
import Post from "./Post";

function ProfileCard() {
    const [ posts, setPosts ] = useState([
        {
            id: 1,
            title: "text text text",
            text: "post post post",
            author: "Viktor"
        },
        {
            id: 2,
            title: "text 2 text 2 text 2",
            text: "post 2 post 2 post 2",
            author: "Kirill"
        },
        {
            id: 3,
            title: "text 3 text 3 text 3",
            text: "post 3 post 3 post 3",
            author: "Anton"
        },
        {
            id: 4,
            title: "text text text",
            text: "post post post",
            author: "Valentine"
        },
        {
            id: 5,
            title: "text 2 text 2 text 2",
            text: "post 2 post 2 post 2",
            author: "Nikita"
        },
        {
            id: 6,
            title: "text 3 text 3 text 3",
            text: "post 3 post 3 post 3",
            author: "Max"
        },
        {
            id: 7,
            title: "text text text",
            text: "post post post",
            author: "Artem"
        },
        {
            id: 8,
            title: "text 2 text 2 text 2",
            text: "post 2 post 2 post 2",
            author: "Arkasha"
        },
        {
            id: 9,
            title: "text 3 text 3 text 3",
            text: "post 3 post 3 post 3",
            author: "Gena"
        }
    ]);

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    function addPost(event) {
        event.preventDefault();

        const newPost = {
            id: Date.now(),
            title: title,
            text: text,
            author: "Viktor"
        }

        setPosts([...posts, newPost]);
        setTitle("");
        setText("");
    }

    return (
        <section className="profile-card">
            <div className="profile">
                <div className="avatar">avatar</div>
                <div className="profile-info">
                    <h2>Name</h2>
                    <p>@nickname</p>
                </div>
            </div>

            <form className="post-form" onSubmit={addPost}>
                <input type="text" placeholder="Заголовок" value={title} onChange={(event) => setTitle(event.target.value)} />
                <textarea placeholder="Текст поста" value={text} onChange={(event) => setText(event.target.value)}></textarea>
                <button type="submit">Опубликовать</button>
            </form>

            {posts.map((post) => (
                <Post
                    key={post.id}
                    author={post.author}
                    title={post.title}
                    likes={17}
                    text={post.text}
                />
            ))};

            {/* <Post author="Viktor" title="Study React for frontend"  likes={17} text="какой-то осмысленный текст" /> */}
            {/* <Post author="Viktor" title="Explore web-dev"  likes={17} text="какой-то осмысленный текст" />
        <Post author="Viktor" title="I`m going to study"  likes={17} text="какой-то осмысленный текст" /> */}
        </section>
    )
}

export default ProfileCard;