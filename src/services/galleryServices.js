
import axiosInstance from '@/utils/axiosInstance'

export const galleryServices = {
    getGallery(query = "") {
        return axiosInstance.get(`/galleries${query}`);
    }
}
