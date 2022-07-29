import { useState, useEffect } from "react";
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                 const response = await axios.get(url, {
                    cancelToken: source.token /* This will allow us to cancel the request If the component gets unmounted */
                 });
                 if (isMounted) {
                    setData(response.data)
                    setFetchError(null);
                 }
            } catch (err) {
                if (isMounted) {
                    setFetchError(err.message);
                    setData([]);
                }
            } finally {
                isMounted &&  setIsLoading(false);
            }
        }

        fetchData(dataUrl);

        // This will cancel the request if the component is unloaded during the request.
        const cleanUp = () => {
            isMounted = false;
            source.cancel(); 
        }

        return cleanUp;
    }, [dataUrl])

    return { data, fetchError, isLoading };
}


export default useAxiosFetch;