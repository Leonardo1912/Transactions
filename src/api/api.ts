import axios from 'axios';

axios.defaults.baseURL = 'https://62d67af351e6e8f06f0aa69c.mockapi.io/api/test'

export const getTransactionsAPI = async (page: number) =>
    axios.get(`/transactions/?page=${page}&limit=7`)
export const getTransactionsFilterAPI = async (filter: string) =>
    axios.get(`/transactions/?filter=${filter}`)
export const searchTransactionsAPI = async (search: string) =>
    axios.get(`/transactions/?search=${search}`)
export const updateTransactionAPI = async (id: number, body: {}) => axios.put(`/transactions/${id}`, body)
export const deleteTransactionAPI = async (id: number) => axios.delete(`/transactions/${id}`)
