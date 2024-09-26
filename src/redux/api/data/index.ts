import {api as index} from ".."

const ENPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
    endpoints: (builder) => ({
        getData: builder.query<DATA.GetDataResponse, DATA.GetDataRequest>({
            query: () => ({
                url: `${ENPOINT}`,
                method: 'GET',
            }),
            providesTags: ['data']
        })
    })
})

export const {useGetDataQuery} = api