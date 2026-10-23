import Post from "../components/Post";
import { usePosts } from "../context/PostsContext";

function Home() {
    //  const posts = [
    //         {
    //             id: 1,
    //             title: "text text text",
    //             text: "post post post",
    //             author: "Viktor"
    //         },
    //         {
    //             id: 2,
    //             title: "text 2 text 2 text 2",
    //             text: "post 2 post 2 post 2",
    //             author: "Kirill"
    //         },
    //         {
    //             id: 3,
    //             title: "text 3 text 3 text 3",
    //             text: "post 3 post 3 post 3",
    //             author: "Anton"
    //         },
    //         {
    //             id: 4,
    //             title: "text text text",
    //             text: "post post post",
    //             author: "Valentine"
    //         },
    //         {
    //             id: 5,
    //             title: "text 2 text 2 text 2",
    //             text: "post 2 post 2 post 2",
    //             author: "Nikita"
    //         },
    //         {
    //             id: 6,
    //             title: "text 3 text 3 text 3",
    //             text: "post 3 post 3 post 3",
    //             author: "Max"
    //         },
    //         {
    //             id: 7,
    //             title: "text text text",
    //             text: "post post post",
    //             author: "Artem"
    //         },
    //         {
    //             id: 8,
    //             title: "text 2 text 2 text 2",
    //             text: "post 2 post 2 post 2",
    //             author: "Arkasha"
    //         },
    //         {
    //             id: 9,
    //             title: "text 3 text 3 text 3",
    //             text: "post 3 post 3 post 3",
    //             author: "Gena"
    //         }
    //     ];


    const { posts } = usePosts();
    return (
        <section>
            <h1>Главная</h1>
            <div className="feed">
                <h2>Лента</h2>
                {posts.length > 0 ? (
                    posts.map((post) => (
                    <Post
                        key={post.id}
                        author={post.author}
                        title={post.title}
                        text={post.text}
                        id = {post.id}
                    />
                ))) : (
                    <p>Пока нет публикаций</p>
                )}
            </div>
        </section>
    );
}
export default Home;