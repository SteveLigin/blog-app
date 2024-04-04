import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est nemo
        fugit asperiores expedita quibusdam debitis nulla, officiis nobis
        possimus cumque excepturi, quidem aliquam repellat aut iusto aperiam
        dolores saepe.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est nemo
        fugit asperiores expedita quibusdam debitis nulla, officiis nobis
        possimus cumque excepturi, quidem aliquam repellat aut iusto aperiam
        dolores saepe.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est nemo
        fugit asperiores expedita quibusdam debitis nulla, officiis nobis
        possimus cumque excepturi, quidem aliquam repellat aut iusto aperiam
        dolores saepe.
      </p>
    </div>
  );
}

export default Post;
