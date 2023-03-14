import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [yukleniyor, setYukleniyor] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8000/yazilar')
            .then(res => {
                return res.json();
            })
            .then(data => {
                //console.log(data);
                setBlogs(data);
                setYukleniyor(false);
            })
    }, [])

    const handleClick = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            {yukleniyor && <div className="loading">Yükleniyor...</div>}
            {blogs && <BlogList bloglar={blogs} baslik="Bütün Yazılar" handleClick={handleClick} />}
        </div>
    );
}

export default Home;