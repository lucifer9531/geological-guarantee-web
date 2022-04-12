import { defHttp } from '/@/utils/http/axios';

enum Api {
  DrillList = '/api/jy-csp-gis/api/three/drill/index',
}

export function getDrillList() {
  return defHttp.get<string[]>({
    url: Api.DrillList,
    params: {
      orgcode: '006070021',
    },
  });
}
