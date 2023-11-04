import axios from 'axios';
import { task } from './task';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3333',
});

export const service = {
  task: task(axiosInstance)
}