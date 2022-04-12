import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dataEdit: AppRouteModule = {
  path: '/dataEdit',
  name: 'System',
  component: LAYOUT,
  redirect: '/dataEdit/drilling',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: '业务数据编辑',
  },
  children: [
    {
      path: 'drilling',
      name: 'Drilling',
      meta: {
        title: '钻孔数据',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/dataEdit/drilling/index.vue'),
    },
  ],
};

export default dataEdit;
