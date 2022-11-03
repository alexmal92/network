import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PhotosType } from '../utils/types/types'

// interface FetchArgs extends RequestInit {
//   url: string
//   params?: Record<string, any>
//   body?: any
//   responseHandler?: 'json' | 'text' | ((response: Response) => Promise<any>)
//   validateStatus?: (response: Response, body: any) => boolean
// }

export const dialogsApi = createApi({
  reducerPath: 'dialogsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('API-KEY', 'e55d182f-228d-4cfc-a08e-1e768b361a21')
      return headers
    }
  }),
  tagTypes: ['Dialogs', 'Messages'],
  endpoints: (builder) => ({
    getAllDialogs: builder.query<IDialog[], any>({
      query: () => ({
        url: `dialogs/`
      }),
      providesTags: (result) => ['Dialogs']
    }),
    startChating: builder.mutation({
      query: (userId: number) => ({
        url: `dialogs/${userId}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Dialogs']
    }),
    getMessage: builder.query<IMessages, any>({
      query: (userId: number, page = 1, count = 10) => ({
        url: `dialogs/${userId}/messages`,
        params: {
          page,
          count
        }
      }),
      providesTags: result => ['Messages']
    }),
    sendMessage: builder.mutation({
      query: ({ sendUserId, message }) => ({
        url: `dialogs/${sendUserId}/messages`,
        method: 'POST',
        body: { body: message }
      }),
      invalidatesTags: ['Messages']
    }),
    viewedMessage: builder.query({
      query: (messageId) => ({
        url: `dialogs/messages/${messageId}/viewed`,
      })
    }),
    deleteMessage: builder.mutation({
      query: (messageId) => ({
        url: `dialogs/messages/${messageId}`,
        method: 'DELETE'
      })
    }),
    spamMessage: builder.mutation({
      query: (messageId) => ({
        url: `dialogs/messages/${messageId}/spam`,
        method: 'POST',
      })
    }),
    restoreMessage: builder.mutation({
      query: (messageId) => ({
        url: `dialogs/messages/${messageId}/restore`,
        method: 'PUT',
      })
    }),
    newestDateMessage: builder.query({
      query: ({ userId, date }) => ({
        url: `dialogs/${userId}/messages/new?newerThen=${date}`,
      })
    }),
    newListMessage: builder.query({
      query: (count) => ({
        url: `dialogs/messages/new/${count}`,
      })
    }),
  }),
})

export const { useGetAllDialogsQuery, useGetMessageQuery, useSendMessageMutation } = dialogsApi

interface IMessageefw {
  data: {
    message: {
      id: "646bb859-cffc-40f3-a12d-7dfd512a2c1a",
      body: "regregre", "translatedBody": null,
      addedAt: "2022-09-13T14:41:36.323",
      senderId: 24748,
      senderName: "alexmal92",
      recipientId: 25469,
      recipientName: "treefree",
      viewed: false,
      deletedBySender: false,
      deletedByRecipient: false,
      isSpam: false,
      distributionId: null
    }
  },
  messages: [],
  fieldsErrors: [],
  resultCode: 0
}

interface IMessages {
  error: null
  items: IMessage[]
  totalCount: 3
}

interface IMessage {
  addedAt: string // "2022-09-13T14:30:41.363"
  body: string // "ewfewfew"
  id: string // "75e744fd-2fe8-4ce6-a3f9-5db2d5c84f73"
  recipientId: number // 25469
  senderId: number // 24748
  senderName: string // "alexmal92"
  translatedBody: string | null // null
  viewed: boolean // false
}

interface IDialogs {

}
export interface IDialog {
  hasNewMessages: boolean // false
  id: number // 25469
  lastDialogActivityDate: string // "2022-09-13T14:41:36.323"
  lastUserActivityDate: string // "2022-09-12T11:28:59.157"
  newMessagesCount: number // 0
  photos: PhotosType
  userName: string // "treefree"
  length: number // 1
}

// export const dialogsAPI = {
//   async startChating(userId: number) {
//     let res = await instance.put<ResType>(`dialogs/${userId}`, {})
//     return res
//   },
//   async getAllDialogs() {
//     return instance.get<ResType>(`dialogs/`)
//       .then(response => response.data)
//   },
//   async getUserMessages(userId: number, page = 1, count = 10) {
//     return instance.get<ResType>(`dialogs/${userId}/messages?page=${page}&count=${count}`)
//       .then(response => response.data)
//   },
//   async sendMessage(userId: number, message: string) {
//     return instance.post<ResType>(`dialogs/${userId}/messages`, { message })
//       .then(response => response.data)
//   },
//   async viewedMessage(messageId: number) {
//     return instance.get<ResType>(`dialogs/messages/${messageId}/viewed`)
//       .then(response => response.data)
//   },
//   async deleteMessage(messageId: number) {
//     return instance.delete<ResType>(`dialogs/messages/${messageId}`)
//       .then(response => response.data)
//   },
//   async spamMessage(messageId: number) {
//     return instance.post<ResType>(`dialogs/messages/${messageId}/spam`, {})
//       .then(response => response.data)
//   },
//   async restoreMessage(messageId: number) {
//     return instance.put<ResType>(`dialogs/messages/${messageId}/restore`, {})
//       .then(response => response.data)
//   },
//   async newestDateMessage(userId: number, date: string) {
//     return instance.get<ResType>(`dialogs/${userId}/messages/new?newerThen=${date}`)
//       .then(response => response.data)
//   },
//   async newListMessage(count: number) {
//     return instance.get<ResType>(`dialogs/messages/new/${count}`)
//       .then(response => response.data)
//   }
// }