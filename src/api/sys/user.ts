import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';
import { buildUUID } from '/@/utils/uuid';

enum Api {
  Login = '/api/auth/oauth/token',
  RSA = '/api/rsa',
  Logout = '/api/auth/token/logout',
  GetUserInfo = '/api/admin/user/info',
  GetPermCode = '/getPermCode',
}

export function rsaApi() {
  return defHttp.get<string>({
    url: Api.RSA,
  });
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params: {
        ...params,
        randomStr: buildUUID(),
        code: '',
        grant_type: 'password',
        scope: 'server',
        encrypt: 'RSA',
      },
    },
    {
      errorMessageMode: mode,
      joinParamsToUrl: true,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function doLogout() {
  return defHttp.delete({ url: Api.Logout });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}
