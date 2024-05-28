import { formatDate } from '@/utils/format'
import React from 'react'

const BlogDetailTitle = ({ name, author, createdAt, createdUser }) => {
    return (
        <div className="blogdetail__title">
            <h1 className="title --t2">{name || ""}</h1>
            <ul className="meta">
                <li className="meta__item">Đăng bởi {author || ""}</li>
                <li className="meta__item">{createdUser?.name || " "}</li>
                <li className="meta__item">{formatDate(createdAt || "")}</li>
            </ul>
        </div>
    )
}

export default BlogDetailTitle