import { defHttp } from '/@/utils/http/axios';

enum Api {
  DrillList = '/api/jy-csp-gis/api/three/drill/index',
  CreateOrUpdateDrill = '/api/jy-csp-gis/api/three/drill/index',
  DeleteDrill = '/api/jy-csp-gis/api/three/drill/index',
  DeleteDrillDetails = '/api/jy-csp-gis/api/three/drill/hole',
  DrillDetailsList = '/api/jy-csp-gis/api/three/drill/hole',
  UpdateDrillDetails = '/api/jy-csp-gis/api/three/drill/hole',
}

export function getDrillList(params: any, orgcode = '006070021') {
  return defHttp.get<string[]>({
    url: `${Api.DrillList}`,
    params: {
      orgcode,
      ...params,
    },
  });
}

// TODO 类型定义
export function createAndUpdateDrill(params: any, orgCode = '006070021') {
  return defHttp.post<void>({
    url: `${Api.CreateOrUpdateDrill}/${orgCode}`,
    params,
  });
}

export function deleteDrill(ids: string | string[], orgCode = '006070021') {
  return defHttp.delete<void>({
    url: `${Api.DeleteDrill}/${orgCode}/${Array.isArray(ids) ? '' : ids}`,
    data: ids,
  });
}

export function deleteDrillDetails(ids: string | string[], orgCode = '006070021') {
  return defHttp.delete<void>({
    url: `${Api.DeleteDrillDetails}/${orgCode}/${Array.isArray(ids) ? '' : ids}`,
    data: ids,
  });
}

export function getDrillDetailsList(params: any, orgCode = '006070021') {
  return defHttp.get<any>({
    url: `${Api.DrillDetailsList}/${orgCode}/${params.id}`,
  });
}

export function updateDrillDetails(params: any, orgCode = '006070021') {
  return defHttp.put<any>({
    url: `${Api.UpdateDrillDetails}/${orgCode}`,
    params,
  });
}
