import { baseApi } from "@/redux/api/baseapi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (args) => {
                // const params = new URLSearchParams();
                // if (args) {
                //     args.forEach((item: TQueryParam) => {
                //         params.append(item.name, item.value as string);
                //     });
                // }
                return {
                    url: "/products ",
                    method: "GET",
                    // params,
                };
            },
        }),
        getSingleProducts: builder.query({
            query: (id) => {
                return {
                    url: `/products/${id}`,
                    method: "GET",
                    // params,
                };
            },
        }),
        getAllCategory: builder.query({
            query: () => ({
                url: "/category ",
                method: "GET",
            }),
        }),
        getSingleCategory: builder.query({
            query: (id) => ({
                url: `/category/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetAllCategoryQuery,
    useGetSingleProductsQuery,
    useGetSingleCategoryQuery
} = productApi;
