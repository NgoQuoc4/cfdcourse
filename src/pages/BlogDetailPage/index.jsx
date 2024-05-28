import useDebounce from "@/hooks/useDebounce";
import useMutation from "@/hooks/useMutation";
import { blogsService } from "@/services/blogsService";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import BlogDetailTitle from "./BlogDetailTitle";
import BlogDetailContent from "./BlogDetailContent";
import BlogDetailRelated from "./BlogDetailRelated";

export const BlogDetailPage = () => {
    const { blogSlug } = useParams();
    const {
        data: dataBlogDetail,
        error: errorBlogDetail,
        loading: loadingBlogDetail,
        execute: getBlogDetail,
    } = useMutation(blogsService.getBlogBySlug);

    useEffect(() => {
        !!blogSlug && getBlogDetail(blogSlug);
    }, [blogSlug]);



    const {
        data: dataBlogRelated,
        error: errorBlogRelated,
        loading: loadingBlogRelated,
        execute: getBlogRelated,
    } = useMutation((query) => blogsService.getBlog(query));

    const blogDetail = dataBlogDetail || {};
    const categoryId = dataBlogDetail?.category?.id || "";
    const query = categoryId ? `?limit=3&category=${categoryId}` : '?limit=3';

    const loadingApi = loadingBlogDetail || loadingBlogRelated;
    const loadingPage = useDebounce(loadingApi, 300);

    useEffect(() => {
        getBlogRelated(query)
    }, [query])

    console.log("blogDetail", blogDetail)
    return (
        <main className="mainwrapper blogdetail --ptop">
            <div className="container">
                <div className="wrapper">
                    <BlogDetailTitle {...blogDetail} />
                    <BlogDetailContent {...blogDetail} loading={loadingPage} />
                </div>
                <BlogDetailRelated blogs={dataBlogRelated?.blogs} loading={loadingPage} />
            </div>
        </main>

    )
}

export default BlogDetailPage