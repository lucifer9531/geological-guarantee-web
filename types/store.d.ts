import { ErrorTypeEnum } from '/@/enums/exceptionEnum';
import { MenuModeEnum, MenuTypeEnum } from '/@/enums/menuEnum';

// Lock screen information
export interface LockInfo {
  // Password required
  pwd?: string | undefined;
  // Is it locked?
  isLock?: boolean;
}

// Error-log information
export interface ErrorLogInfo {
  // Type of error
  type: ErrorTypeEnum;
  // Error file
  file: string;
  // Error name
  name?: string;
  // Error message
  message: string;
  // Error stack
  stack?: string;
  // Error detail
  detail: string;
  // Error url
  url: string;
  // Error time
  time?: string;
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

export interface UserInfo {
  deptIds: null | string[] | number[];
  dutys: null | string[] | number[];
  orgIds: null | string[] | number[];
  permissions: string[];
  roles: string[];
  scopeLevel: null | number;
  userDTO: UserInfoOptions;
}

export interface BeforeMiniState {
  menuCollapsed?: boolean;
  menuSplit?: boolean;
  menuMode?: MenuModeEnum;
  menuType?: MenuTypeEnum;
}
