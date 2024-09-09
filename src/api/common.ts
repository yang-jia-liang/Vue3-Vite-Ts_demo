import request from '@/utils/request.js'

// 登录
export interface LoginDataInterface {
  phone: string;
  password: string;
  type: number;
}
export const login = (data: LoginDataInterface) => {
  return request({
    url: `/login`,
    data,
    method: "POST",
  });
};

// 退出登录
export const logout = () => {
  return request({
    url: `/logout`,
    method: "POST",
  });
};

// 获取用户数据
export const getUserInfo = () => {
  return request({
    url: `/me`,
    method: "GET",
  });
};

// 获取用户权限
export const getUserPermission = () => {
  return request({
    url: `/users/permissions`,
    method: "GET",
  });
};