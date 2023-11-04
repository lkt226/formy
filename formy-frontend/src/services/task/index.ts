import { AxiosInstance } from "axios"

import { TaskCreate, TaskGet, TaskUpdate } from './type'
import { setAll, setOne, deleteOne } from '@/store/slice/task.slice'
import { store } from '@/store'

export const task = (axiosInstance: AxiosInstance) => ({
  async findAll () {
    const response = await axiosInstance.get('/task')
    const tasks = response.data as TaskGet[]
    store.dispatch(setAll(tasks))
  },
  async complete (id: string) {
    const response = await axiosInstance.put(`/task/${id}/complete`)
    const task = response.data as TaskGet
    store.dispatch(setOne(task))
  },
  async create (data: TaskCreate) {
    const response = await axiosInstance.post('/task', data)
    const task = response.data as TaskGet
    store.dispatch(setOne(task))
  },
  async update (id: string, data: TaskUpdate) {
    const response = await axiosInstance.put(`/task/${id}`, data)
    const task = response.data as TaskGet
    store.dispatch(setOne(task))
  },
  async delete (id: string) {
    await axiosInstance.delete(`/task/${id}`)
    store.dispatch(deleteOne(id))
  }
})