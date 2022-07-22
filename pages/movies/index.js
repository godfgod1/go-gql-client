import { gql, useApolloClient } from '@apollo/client'
import {useEffect, useState} from "react"

export default function Movies() {
  const [movies, setMovies] = useState([])
  const client = useApolloClient()

  useEffect(()=>{
     client.query({
      query:gql`
        {
          allMovies{
            title
          }
        }
      `
    }).then(results=>{
      console.log(results)
      setMovies(results.data.allMovies)
    })
  },[client])

    return (
      <div >
         {!movies && <h4>Loading...</h4>}
          {movies?.map(movie => 
          <li key={movie.id}>
            {movie.title}
          </li>
            
            )}
      </div>
    )
  }