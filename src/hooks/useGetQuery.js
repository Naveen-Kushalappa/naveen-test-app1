import {useEffect, useState} from "react";

const useGetQuery = (url) => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [url]);

    return {data, loading};
};


export default useGetQuery