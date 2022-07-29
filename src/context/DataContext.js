import { createContext, useState, useEffect  } from "react";
import useAxiosFetch from '../hooks/useAxiosFetch';
import { useNavigate } from "react-router-dom";


  const DataContext = createContext({});

  export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigte = useNavigate()

    // Custom Hook to fetch data and catch error.
    const  { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    //  useEffect hook to fetch data from the json-server
    useEffect(() => {
       setPosts(data);
    }, [data]);

    /* Using the useEffect function to set the Logic/functionality for our search bar in the navigation */
     useEffect(() => {
        const filteredResults = posts.filter(
          post => ((post.body).toLowerCase()).includes(search.toLowerCase())
          || ((post.title).toLowerCase()).includes(search.toLowerCase())
        );
        setSearchResults(filteredResults.reverse());
     }, [posts, search])


    return (
        <DataContext.Provider value={{
            search, setSearch, setPosts,
            searchResults, fetchError, isLoading,
            posts
        }}>
            {children}
        </DataContext.Provider>    
    )
}

export default DataContext;