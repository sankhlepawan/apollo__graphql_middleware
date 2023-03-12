import config from "../config/config";
import { filterQuery, dataReducer } from "../utils/utils";

const supabase = config.supabase;

export default class CartAPI {
  async addToCart({ filter }) {
    // let query = supabase
    //   .from("product")
    //   .select(
    //     "id,name,price,regular_price,created_at,updated_at,slug,store_id, description, average_rating, external_url,cat_id, image(id, source_url, created_at, src_set)"
    //   );
    // query = filterQuery(query, filter);
    // const { data, error } = await query;
    // return dataReducer(data, this.productMapper);
  }

  cartMapper(item) {
    return {
      ...item,
      storeId: item.store_id,
      productId: item.id,
      categoryId: item.cat_id,
      image: {
        id: item.image.id,
        sourceUrl: item.image.source_url,
        srcSet: item.image.src_set,
      },
    };
  }
}
