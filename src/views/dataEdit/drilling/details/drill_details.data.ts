import { FormSchema } from '/@/components/Table';

export const formSchema: FormSchema[] = [
  {
    field: 'gisBoreholeId',
    label: '钻孔编号',
    component: 'Input',
    required: true,
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'gisGid',
    label: '编号',
    component: 'Input',
    show: false,
  },
  {
    field: 'gisStratumCode',
    label: '地层时代代码',
    component: 'Input',
  },
  {
    field: 'gisLayerId',
    label: '分层ID',
    component: 'Input',
  },
  {
    field: 'gisStructure',
    label: '结构(是/否)',
    component: 'Select',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
  },
  {
    field: 'gisCanonicalName',
    label: '岩性代码',
    component: 'Input',
  },
  {
    field: 'gisMarkLayer',
    label: '标志/煤层代码',
    component: 'Input',
  },
  {
    field: 'gisLithologyDes',
    label: '岩性描述',
    component: 'Input',
  },
  {
    field: 'gisYawAngle',
    label: '方位角',
    component: 'InputNumber',
    componentProps: {
      style: {
        width: '100%',
      },
    },
  },
  {
    field: 'gisPitchAngle',
    label: '水平角',
    component: 'InputNumber',
    componentProps: {
      style: {
        width: '100%',
      },
    },
  },
  {
    field: 'gisThickness',
    label: '厚度',
    component: 'InputNumber',
    componentProps: {
      style: {
        width: '100%',
      },
    },
  },
  {
    field: 'gisCoreLength',
    label: '岩心长度',
    component: 'Input',
  },
  {
    field: 'gisSamplingRate',
    label: '取样率',
    component: 'InputNumber',
    componentProps: {
      style: {
        width: '100%',
      },
    },
  },
];
