// BlogPosts.js
import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/yesygsiqd3eu`,
  headers: {
    Authorization: `Bearer vHuYr-sAITnOjO_t1-OlEw0suSK9keGnXTVDLl-Xjvc`,
  },
  cache: new InMemoryCache(),
});

const GET_BLOG_POSTS = gql`
  query {
    books {
      items {
        title
        slug
        content
        image
      }
    }
  }
`;



const BlogPosts = () => {
  const { loading, error, data } = useQuery(GET_BLOG_POSTS, { client });
  console.log(loading,"loading", error ,"error" ,data ,"data");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.blogPostCollection.items.map((post:any) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <img src={post.image.url} alt={post.title} width="300" />
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
