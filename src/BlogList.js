import { Link } from 'react-router-dom';
import React from 'react'


export default function BlogList({ bloglar, baslik }) {

  return (
    <div className="Blog-list">
      <h2 style={{ color: '#ff793f' }}>{baslik}</h2>
      {bloglar.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.ad}</h2>
            <p>Yazanın Yazarı: {blog.yazar}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
