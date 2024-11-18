// src/pages/details.tsx
import React from 'react';
import { graphql } from 'gatsby';

const RecipeDetails = ({ data }) => {
  const recipe = data?.contentfulRecepies;
  console.log(recipe,"recipe")
  const rawContent = recipe?.description.raw ? JSON.parse(recipe.description.raw) : null;

  const renderNode = (node) => {
    switch (node.nodeType) {
      case "document":
        return <div>{node.content.map(renderNode)}</div>;

      case "heading-3":
        return <h3>{node.content.map(renderNode)}</h3>;

      case "paragraph":
        return <p>{node.content.map(renderNode)}</p>;

      case "text":
        const isBold = node.marks?.some(mark => mark.type === "bold");
        return isBold ? <strong>{node.value}</strong> : node.value;

      case "unordered-list":
        return <ul>{node.content.map(renderNode)}</ul>;

      case "ordered-list":
        return <ol>{node.content.map(renderNode)}</ol>;

      case "list-item":
        return <li>{node.content.map(renderNode)}</li>;

      default:
        return null;
    }
  };

  return (
    <div>
      <h1>{recipe?.recipeName}</h1>
      <img src={recipe?.coverImage?.url} alt={recipe?.coverImage?.description} />
      <p>{recipe?.displayTitle}</p>
      <div>
        {rawContent && renderNode(rawContent)}
      </div>
      
    </div>
  );
};

export const query = graphql`
 query MyQuery($id: Int!) {
  contentfulRecepies(blogId: {eq: $id}, description: {}) {
    coverImage {
      description
      url
      spaceId
    }
    description {
      raw
    }
    recipeName
    displayTitle
    id
  }
}
`;

export default RecipeDetails;
