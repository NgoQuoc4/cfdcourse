import useQuery from "@/hooks/useQuery";
import { blogsService } from "@/services/blogsService";
import { useEffect, useState } from "react";
import BlogMenu from "./BlogMenu";
import BlogList from "./BlogList";
import useMutation from "@/hooks/useMutation";
import useDebounce from "@/hooks/useDebounce";

export const BlogPage = () => {
    const {
        data: dataBlogCategories,
        error: errorBlogCategories,
        loading: loadingBlogCategories,
    } = useQuery(blogsService.getBlogCategories);
    const dataBlogByCategories = dataBlogCategories?.blogs || [];
    const [selectedCategory, setSelectedCategory] = useState("");

    const query = selectedCategory ? `?category=${selectedCategory}` : "";
    const {
        data: dataBlogs,
        error: errorBlogs,
        loading: loadingBlogs,
        execute: getBlogsByCategory,
        setData
    } = useMutation((query) => blogsService.getBlog(query));

    const loadingDebounce = useDebounce(loadingBlogs, 300);
    const blogs = dataBlogs?.blogs || [];

    useEffect(() => {
        getBlogsByCategory(query, {
            onFail: (error) => {
                if (error?.response?.status == 404) {
                    setData([]);
                }
            }
        });
    }, [query]);

    return (
        <main className="mainwrapper blog --ptop">
            <div className="container">
                <div className="textbox">
                    <div className="container">
                        <h2 className="title --t2">Blog</h2>
                    </div>
                </div>
                <BlogMenu
                    categories={dataBlogByCategories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <BlogList
                    blogs={blogs}
                    loading={loadingDebounce}
                />
            </div>
        </main>
    )
}
export default BlogPage