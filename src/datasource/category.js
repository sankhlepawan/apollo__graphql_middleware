import config from "../config/config";
import { filterQuery, dataReducer } from "../utils/utils";

const supabase = config.supabase;

export default class CategoryAPI {
  async categories({ filter }) {
    let query = supabase
      .from("category")
      .select(
        "id,created_at,name,slug,store_id,image(id,source_url,created_at,src_set)"
      );
    query = filterQuery(query, filter);
    const { data, error } = await query;
    let data1 = dataReducer(data, this.categoryMapper);
    return data1;
  }

  async categoryBySlug({ slug, storeId, first }) {
    let query = supabase
      .from("category")
      .select(
        "id,created_at,name,slug,store_id,image(id,source_url,created_at,src_set)"
      );
    // console.log(slug, storeId, first);
    query = filterQuery(query, { slug, storeId, first });

    const { data, error } = await query;
    return dataReducer(data, this.categoryMapper);
  }

  categoryMapper(category) {
    return {
      ...category,
      storeId: category.store_id,
      image: {
        id: category?.image?.id,
        sourceUrl: category.image?.source_url,
        srcSet: category.image?.src_set,
      },
    };
  }
}
