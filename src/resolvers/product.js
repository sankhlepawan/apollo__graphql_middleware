export default {
  Query: {
    products: (parent, args, { dataSources, context }) => {
      return dataSources.ProductAPI.products({
        filter: args.filter,
      });
    },
  },
};
