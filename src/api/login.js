import { POST } from './axios/index'

const account = import.meta.env.VITE_ACCOUNT
const pwd = import.meta.env.VITE_PWD

export const login = () =>
  POST('/account/login', {
    account,
    pwd,
    accountType: 2
  })
