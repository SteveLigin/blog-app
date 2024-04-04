import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Ligin</b>{" "}
          </span>
          <span className="singlePostAuthor">1 hour ago</span>
        </div>
        <p className="singlePostdesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At libero
          adipisci magni minima tempore facilis iste. Cumque enim nostrum illum
          aspernatur laborum, hic, itaque pariatur impedit repudiandae provident
          alias fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Odit, corrupti voluptate labore dolore, magnam suscipit ullam
          explicabo officiis placeat doloribus, vitae repellat! Modi quasi
          similique corrupti ad, distinctio sit et?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sit tempora architecto molestiae nobis
          suscipit alias ea debitis vero quibusdam, minima praesentium dolorum
          assumenda esse? Quam dolore porro suscipit iusto fuga?Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quia numquam ad optio ex
          tenetur labore autem perferendis consequuntur deleniti in culpa, aut
          quis. Ut illo repellat, tempore esse id accusamus Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Blanditiis, quas pariatur
          omnis ad nam consectetur quos, provident esse ipsa, adipisci porro
          fuga. Facilis fugit consectetur, veniam deleniti voluptatibus
          laudantium rem!
        </p>
      </div>
    </div>
  );
}
