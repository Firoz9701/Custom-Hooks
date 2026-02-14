import { useEffect,useState } from "react";
import { fetchUserPlaces } from "../http";
export function useFetch(fetchFn,initialValue){
     const [isFetching,setIsFetching] = useState();
     const [error,setError] = useState()
     const [fetchedData,setFetchedData] = useState(initialValue);
    useEffect(() => {
    async function fetchdata() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
          setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch Data.' });
      }

      setIsFetching(false);
    }

    fetchdata();
  }, [fetchFn]);

  return {
    isFetching,
     error,
    fetchedData,
    setFetchedData,
   
  }
}