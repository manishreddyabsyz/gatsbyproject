exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
      query {
        allContentfulRecepies {
          edges {
            node {
               blogId 
            }
          }
        }
      }
    `);
  
    result.data.allContentfulRecepies.edges.forEach(({ node }) => {
        console.log(node,"node")
      createPage({
        path: `/details/${node.blogId}`,
        component: require.resolve(`./src/templates/details.tsx`),
        context: { id: node.blogId },
      });
    });
  };
  