import { Category } from "@/payload-types";
import { baseProcedure,createTRPCRouter} from "@/trpc/init"





export const categoriesRouter = createTRPCRouter({
 getMany : baseProcedure.query(async ({ctx}) => {


      const data = await ctx.db.find({
      collection: 'categories',
      depth: 1, // Include subcategories up to 1 level deep //populate subcategories , subcategories.[0] will be a type of Category without further subcategories
      pagination: false,
      where : {
        parent:{
          exists: false,
        },
      },
      sort: "name"

  });
  const formattedData = data.docs.map((doc) => ({
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
          // Because of the depth: 1, we are confident "doc" will be type of "Category" these will not have further subcategories
      ...(doc as Category),
     
      }))
    }));
    return formattedData
 }),
});