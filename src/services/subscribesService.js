
import axiosInstance from '@/utils/axiosInstance'

export const subscribesService = {
    getSubsriber(payload = {}) {
        return axiosInstance.post(`/subscribes`, payload)
    }
}
