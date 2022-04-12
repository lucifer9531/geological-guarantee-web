/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

interface UserInfoOptions {
  createDate: string;
  delFlag: string;
  delFlagx: string;
  deptId: string;
  id: string;
  isAdmin: string;
  phone: string;
  pwdChangeDate: string;
  realname: string;
  updateDate: string;
  userStatus: string;
  userWorkId: string;
  username: string;
}

export interface GetUserInfo {
  deptIds: null | string[] | number[];
  dutys: null | string[] | number[];
  orgIds: null | string[] | number[];
  permissions: string[];
  roles: string[];
  scopeLevel: null | number;
  userDTO: UserInfoOptions;
}

export interface GetUserInfoModel {
  code: string | number;
  data: {
    deptIds: null | string[] | number[];
    dutys: null | string[] | number[];
    orgIds: null | string[] | number[];
    permissions: string[];
    roles: string[];
    scopeLevel: null | number;
    userDTO: UserInfoOptions;
  };
  message: string;
}

export interface LoginResultModel {
  access_token?: string;
  dept_code?: null | string;
  dept_id?: string;
  dept_ids?: null | string[] | number[];
  dept_name?: string | null;
  duty_ids?: number[] | string[];
  expires_in?: number;
  grade?: string;
  isAdmin?: string | number;
  license?: string;
  loginName?: string;
  org_code?: null | string | number;
  org_id?: null | string | number;
  org_ids?: null | string[] | number[];
  org_name?: null | string;
  real_name?: string;
  refresh_token?: string;
  scope?: string;
  token_type?: string;
  user_id?: string;
  username?: string;
}
