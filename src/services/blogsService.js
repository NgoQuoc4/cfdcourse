import axiosInstance from '@/utils/axiosInstance'

export const blogsService = {
    getBlog(query = "") {
        return axiosInstance.get(`/blogs${query}`);
    },
    getBlogBySlug(slug = "") {
        return axiosInstance.get(`/blogs/${slug}`);
    },
    getBlogCategories(query = "") {
        return axiosInstance.get(`/blog-categories${query}`);
    },
    // getBlogCategoriesBySlug(slug = "") {
    //     return axiosInstance.get(`/blog-categories/${slug}`);
    // },
};