import { gql } from "@apollo/client";



export default function Home() {
  return (
    <div >
      home
    </div>
  )
}




//   export async function getStaticProps() {
//     const { data } =  await client.query({
//     query: gql`
//       {
//         allMovies {
//           title
//         }
//       }
//     `,
//   })
// console.log(data)
//   return {
//     props: {
//       allMovies: data.allMovies
//     },
//   };
// }