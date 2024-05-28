
import axiosInstance from '@/utils/axiosInstance'

export const teamServices = {
    getTeam(query = "") {
        return axiosInstance.get(`/teams${query}`)
    }
}
