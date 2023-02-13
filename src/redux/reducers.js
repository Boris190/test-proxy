import { createReducer } from '@reduxjs/toolkit'
import { clearingFields } from './action'
import {
  fetchUsers,
  fetchUsersPosts,
  fetchUsersAlbums,
  fetchUserId,
} from './operations'

export const users = createReducer([], {
  [fetchUsers.fulfilled]: (_, { payload }) => payload,
})

const userState = {
  name: '',
  username: '',
  email: '',
  loading: false,
}

export const user = createReducer(userState, {
  [fetchUserId.fulfilled]: (state, { payload }) => {
    state.username = payload.username
    state.email = payload.email
    state.name = payload.name
    state.loading = true
  },

  [clearingFields]: (_, { payload }) => payload,
})

export const posts = createReducer([], {
  [fetchUsersPosts.fulfilled]: (_, { payload }) => payload,
})

export const albums = createReducer([], {
  [fetchUsersAlbums.fulfilled]: (_, { payload }) => payload,
})
