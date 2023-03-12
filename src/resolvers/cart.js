export default {
  Mutation: {
    addToCart: async (parent, args, { dataSources, context }) => {
      console.log("add to cart mutation::", dataSources, context);
      const product = await dataSources.ProductAPI.products({
        databaseId: args.productId,
      });
      console.log("product:: ", product);
      return await dataSources.CartAPI.addToCart({ productId: args });
    },
  },
};
