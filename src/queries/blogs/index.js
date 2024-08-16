import { gql } from "@apollo/client";

const getposts = gql`
    query getBlogPost {
        posts{
            data{
                attributes{
                    title,
                    url
                }
            }
        }
    }
`

const getPost = gql`
    query getPost($id: ID!){
        posts(id: $id){
            data{
                attributes{
                    title,
                    url
                }
            }
        }
    }
`

export { getPost, getposts }