
export default {
    Query: {
      users: (parent, args, { dataSources }) => {
        return dataSources.UserAPI.getAllUser();
      },
    },
  
    // User: {
    //   messages: (user, args, { models }) => {
    //     ...
    //   },
    // },
  };