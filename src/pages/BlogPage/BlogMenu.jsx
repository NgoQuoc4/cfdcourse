import BlogItem from '@/components/BlogItem';
import React from 'react'
import { Link } from 'react-router-dom';

const BlogMenu = ({ categories, selectedCategory, setSelectedCategory }) => {
    const _onChangeCategory = (e, id) => {
        e.preventDefault();
        setSelectedCategory(id);
    }
    return (
        <div className="blog__menu">
            <Link onClick={(e) => _onChangeCategory(e, "")} className={`blog__menu-item ${selectedCategory === "" ? "active" : ""}`}>Tất cả</Link>
            {
                !!categories?.length && categories.map(({ id, name }) => {
                    return (
                        <Link key={id}
                            onClick={(e) => _onChangeCategory(e, id)}
                            className={`blog__menu-item ${id === selectedCategory ? "active" : ""}`}>{name}</Link>
                    )
                })
            }
        </div>
    )
}

export default BlogMenu;