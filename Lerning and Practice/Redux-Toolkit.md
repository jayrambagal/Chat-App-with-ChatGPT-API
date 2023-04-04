## Redux-Toolkit

### 1. RTK Query ? 
* It is purpose-built to solve the use case of data fetching and caching, supplying a compact, but powerful toolset to define an API interface layer for your app.
* RTK Query is included within the installation of the core Redux Toolkit package. It is available via either of the two entry points below:
```javascript
import { createApi } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
```
#### What's included
* **createApi():** The core of RTK Query's functionality. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.
* **fetchBaseQuery():** A small wrapper around fetch that aims to simplify requests. Intended as the recommended baseQuery to be used in createApi for the majority of users.
* **ApiProvider:** Can be used as a Provider if you do not already have a Redux store.
* **setupListeners():** A utility used to enable refetchOnMount and refetchOnReconnect behaviors.

### 2. Setting up your store and API service :

```javascript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery } = pokemonApi
```
