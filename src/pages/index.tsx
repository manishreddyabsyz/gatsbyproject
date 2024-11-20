  import React, { useEffect, useState } from 'react';
  import {graphql,Link} from "gatsby"
  import "./index.css"
  import Layout from "../components/Layout";
  import Card from "../components/Card"
import Pagination from '../components/Pagination';
  const BlogPosts = ({data,pageContext}:any) => {
    const posts = data?.allContentfulRecepies.edges;
    const itemsPerPage = 3; 
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPosts = posts.slice(startIndex, startIndex + itemsPerPage);
    return (
      <Layout>
      <div className="App">
      <h1 style={{textAlign:"center",margin:0,paddingTop:"10px"}}>Recipes using gatsby:</h1>
      <div className="container">
      {currentPosts.map((item:any, index:number) => {
            const node = item.node;
            return (
              <Card
                key={index}
                imageUrl={node?.coverImage?.file?.url}
                title={node?.recipeName}
                subtitle={node?.displayTitle}
                link={`/details/${node.blogId}`}
              />
            );
          })}
        </div>
        <Pagination
          totalItems={posts.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={(page:number) => setCurrentPage(page)}
        />
      </div>
      </Layout>
    );
  };



  export default BlogPosts;


  export const query= graphql `query MyQuery {
    allContentfulRecepies {
      edges {
        node {
          displayTitle
          id
          blogId
          contentful_id
          coverImage {
            title
            file {
              fileName
              url
            }
          
          }
          description {
            raw
          }
          spaceId
          recipeName
        }
      }
    }
  }`
