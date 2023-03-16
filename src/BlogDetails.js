import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { veri: blog, yukleniyor, hata } = useFetch('http://localhost:8000/yazilar/' + id);
    return (
        <div className="blog-details">
            {yukleniyor && <div>Yükleniyor...</div>}
            {hata && <div>{hata}</div>}
            {blog && (
                <article>
                    <h2>{blog.ad}</h2>
                    <p>Yazar: {blog.yazar}</p>
                    <div>{blog.Aciklama}</div>
                </article>
            )}
        </div>
    );

}

export default BlogDetails;