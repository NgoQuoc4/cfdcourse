import React, { useEffect, useState } from 'react'

const useQuery = (promise, dependencies = []) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        fetchData();
    }, dependencies);

    const fetchData = async (query) => {
        setLoading(true)
        try {
            const res = await promise(query);
            if (res?.data) {
                setData(res.data?.data);
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    return {
        data,
        loading,
        error,
        refetch: fetchData,
    };
}

export default useQuery







