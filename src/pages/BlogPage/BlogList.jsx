import BlogItem from '@/components/BlogItem';
import useDebounce from '@/hooks/useDebounce';
import useMutation from '@/hooks/useMutation';
import { blogsService } from '@/services/blogsService';
import { Empty } from 'antd';
import React, { useEffect } from 'react'
import Pagination from './Pagination';

const BlogList = ({ blogs, loading }) => {
    return (
        <>
            {!!blogs?.length && (
                <>
                    <div className={`blog__list ${loading ? "is-loading" : "is-loaded"}`}>
                        {blogs.map((blog) => (
                            <BlogItem key={blog?.id} {...blog} />
                        ))}
                    </div>
                    {loading || (<Pagination />)}
                </>
            )}
            {!loading && !blogs?.length && (
                <Empty description="Không tìm thấy dữ liệu" />
            )}
        </>
    )
}

export default BlogList