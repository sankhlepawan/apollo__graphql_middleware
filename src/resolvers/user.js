
export default {
    Query: {
      users: (parent, args, { dataSources, context }) => {
        return dataSources.UserAPI.getAllUser();
      },
      getuserbyid: (parent, args, { dataSources, context }) => {
        return dataSources.UserAPI.userById({ userId: args.id });
      }
    },
  
    // User: {
    //   messages: (user, args, { models }) => {
    //     ...
    //   },
    // },
  };