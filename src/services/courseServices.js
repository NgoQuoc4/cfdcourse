import axiosInstance from '@/utils/axiosInstance'

export const courseServices = {
    getCourses(query = "") {
        return axiosInstance.get(`/courses${query}`);
    },
    getCourseBySlug(slug = "") {
        return axiosInstance.get(`/courses/${slug}`);
    },
};


