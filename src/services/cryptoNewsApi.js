import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 const cryptoNewsHeaders = {
   
		'x-rapidapi-key': '7b60d8599cmsh4ae05aedac75270p190d1djsn8f3b493ac12b',
		'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
	
 }

 const baseUrl = 'https://real-time-news-data.p.rapidapi.com';

 const createRequest = (url) =>({
    url,
    headers:cryptoNewsHeaders
})

export const cryptoNewsApi = createApi({
    // we have to provide a name what is this reducer for, we can giev any name here
    reducerPath: 'cryptoNewsApi',
    baseQuery:fetchBaseQuery({ baseUrl,
        // prepareHeaders:()=> cryptoApiHeaders
    }),
    endpoints: (builder) =>({
        // these are the names of the endpoints, can be named anything we want
        getCryptoNews : builder.query({
            query:({topic, count} ) => createRequest(`/topic-headlines?topic=${topic}&limit=${count}&country=US&lang=en`)

            // query:(count) => createRequest(`/topic-headlines?topic=BUSINESS&limit=500&country=US&lang=en`)

        })
    })

});

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;

export const {
    // this is a kind of hook that we have created for ourselves
    useGetCryptoNewsQuery,
} = cryptoNewsApi;