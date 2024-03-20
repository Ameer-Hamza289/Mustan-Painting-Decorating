import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const emptySplitApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:  '',
    prepareHeaders: (headers, { getState }:any) => {
      headers.set('accept', 'application/json')
      try {
        const { token } = getState().reducer.user
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        } else {
          headers.set('authorization', '')
        }
      } catch (err) {
        headers.set('authorization', '')
      }

      return headers
    }
  }),
  endpoints: () => ({}),
  tagTypes: [
    'Profile',
    'USER_BY_ID',
   'MY_VEHICLES'
    
  ]
})
