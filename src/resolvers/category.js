export default {
  Query: {
    categories: (parent, args, { dataSources, context }) => {
      return dataSources.CategoryAPI.categories({
        filter: args.filter,
      });
    },
  },
  Category: {
    products: async (parent, args, { dataSources, context }) => {
      const catList = await dataSources.CategoryAPI.categoryBySlug({
        slug: parent?.slug,
        storeId: parent?.storeId,
        first: args.filter?.first,
      });

      const filter = {};
      filter.storeId = parent?.storeId;
      filter.categoryIds = catList.map((c) => c.id);
      return dataSources.ProductAPI.products({
        filter,
      });
    },
  },
};
