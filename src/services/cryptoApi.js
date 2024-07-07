// this is where we write the logic of fetching the data from rapid api

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders ={
   'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
	'x-rapidapi-key': '7b60d8599cmsh4ae05aedac75270p190d1djsn8f3b493ac12b'
}

const baseUrl =  'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({
    url,
    headers:cryptoApiHeaders,
    
})
export const cryptoApi = createApi({
    // we have to provide a name what is this reducer for, we can giev any name here
    reducerPath: 'cryptoApi',
    baseQuery:fetchBaseQuery({ baseUrl,
        // prepareHeaders:()=> cryptoApiHeaders
    }),
    endpoints: (builder) =>({
        // these are the names of the endpoints, can be named anything we want
        getCryptos : builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`),
        })
    })

})

export const {
    // this is a kind of hook that we have created for ourselves
    useGetCryptosQuery, useGetCryptoDetailsQuery
} = cryptoApi;

