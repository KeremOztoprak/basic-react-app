import { useParams, useHistory } from "react-router-dom";
import usePosts from "./hooks/usePosts";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const { blog, hata, yukleniyor } = usePosts({ id });

  const handleDelete = () => {
    fetch("http://localhost:8000/yazilar/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("silindi");
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {yukleniyor && <div>Yükleniyor...</div>}
      {hata && <div>{hata}</div>}
      {blog && (
        <article>
          <h2>{blog.ad}</h2>
          <p>Yazar: {blog.yazar}</p>
          <div>{blog.Aciklama}</div>
          <button onClick={handleDelete}>Sil</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
