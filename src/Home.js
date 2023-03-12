import { useState , useEffect} from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs,setBlogs] = useState([
        {
            ad:"Yeni Başlayanlar için C#",
            Aciklama:"lorem ipsun",
            yazar:"Bugs Bunny",
            id:1
        },
        {
            ad:"React Öğreniyorum",
            Aciklama:"lorem ipsun",
            yazar:"Sylvester",
            id:2
        },
        {
            ad:"İleri Seviye C#",
            Aciklama:"lorem ipsun",
            yazar:"Snoopy",
            id:3
        },
        {
            ad:"MVC Öğreniyorum",
            Aciklama:"lorem ipsun",
            yazar:"Scooby-Doo",
            id:4
        }
    ])

    useEffect(()=>{
        console.log('useEffect çalıştı');
        console.log('blogs');
    },[blogs])    

    const handleClick=(id) => {
        const newBlogs = blogs.filter(blog=>blog.id !==id);
        setBlogs(newBlogs);
    }

    return (
        <div className = "home">
            <BlogList bloglar={blogs} baslik = "Bütün Yazılar" handleClick = {handleClick}/>
            <br/>
        </div>
    );
}

export default Home;