import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1`
})

const baseQueryExtended: BaseQueryFn = (api, args, extraOptions) => {
    const result = baseQuery(api, args, extraOptions);
    return result;
}


export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryExtended,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    tagTypes: ['data'],
    endpoints: () => ({})
})