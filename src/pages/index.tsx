  import React, { useEffect, useState } from 'react';
  import {graphql,Link} from "gatsby"
  import "./index.css"
  const BlogPosts = ({data}) => {
    console.log(data?.allContentfulRecepies.edges,"dattaaa");
    return (
      <div className="App">
      <h1 style={{textAlign:"center"}}>Recipes using gatsby:</h1>
        <div className="container">
          {data?.allContentfulRecepies.edges.map((item, index) => {
            console.log(item, "item");
            return (
              <div className="card">
                <img src={item?.node?.coverImage?.file?.url} alt="img" />
                <h1>{item?.node?.recipeName}</h1>
                <p>{item?.node?.displayTitle}</p>
            <Link to={`/details/${item.node.blogId}`}>   <button className="btn">See Recipe..</button></Link>
              </div>
            );
          })}
        </div>
      </div>
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
