import { gql } from "@apollo/client";

const getProjects = gql`
    query getAllProjects{
        projects{
            data{
                attributes{
                        title,
                        url
                }
            }
        }
    }
`


const getProject = gql`
    query getProjectById($id: ID!){
        projects(id: $id){
            data{
                attributes{
                    title,
                    url
                }
            }
        }
    }
`

export { getProject, getProjects }