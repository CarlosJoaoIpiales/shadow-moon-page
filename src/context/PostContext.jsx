import { createContext } from "react";
import { useFetch } from '../data/useFetch';


const apiData = useFetch("https://api.jikan.moe/v4/top/reviews");
export const PostContext = createContext();
export function PostContextProvider(props) {
  const posts = apiData.read();
  /*const {data, loading} = useFetch('https://api.jikan.moe/v4/watch/promos/popular')*/
  return (
    <PostContext.Provider value={{posts}}>{props.children}</PostContext.Provider>
  );
}