import { FormSchema } from '/@/components/Table';

const isIndex = (type: string) => type === '0';
const isData = (type: string) => type === '1';
const isFeature = (type: string) => type === '2';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'gisBoreholeId',
    label: '钻孔编号',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'gisDrillType',
    label: '钻孔类型',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'type',
    label: '数据类型选择',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '钻孔索引', value: '0' },
        { label: '钻孔数据', value: '1' },
        { label: '煤层结构', value: '2' },
      ],
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'gisBoreholeId',
    label: '钻孔编号',
    component: 'Input',
    required: true,
  },
  {
    field: 'gisDrillType',
    label: '钻孔类型',
    component: 'Input',
    ifShow: ({ values }) => isIndex(values.type),
  },
  {
    field: 'gisLngDis',
    label: '经距X',
    component: 'InputNumber',
    required: true,
    componentProps: {
      style: {
        width: '100%',
      },
    },
    ifShow: ({ values }) => isIndex(values.type),
  },
  {
    field: 'gisLatDis',
    label: '纬距Y',
    component: 'InputNumber',
    componentProps: {
      style: {
        width: '100%',
      },
    },
    required: true,
    ifShow: ({ values }) => isIndex(values.type),
  },
  {
    field: 'gisElevation',
    label: '标高Z',
    component: 'InputNumber',
    componentProps: {
      style: {
        width: '100%',
      },
    },
    required: true,
    ifShow: ({ values }) => isIndex(values.type),
  },
  {
    field: 'gisLocation',
    label: '位置',
    component: 'Input',
    ifShow: ({ values }) => isIndex(values.type),
  },
  {
    field: 'gisMileage',
    label: '里程',
    component: 'InputNumber',
    componentProps: {
      style: {
        width: '100%',
      },
    },
    ifShow: ({ values }) => isIndex(values.type),
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
    ifShow: ({ values }) => !isFeature(values.type),
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
    ifShow: ({ values }) => !isFeature(values.type),
  },
  {
    field: 'gisRigType',
    label: '钻机类型',
    component: 'Input',
    ifShow: ({ values }) => isIndex(values.type),
  },
  {
    field: 'gisOpenTime',
    label: '开孔时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      style: {
        width: '100%',
      },
    },
    ifShow: ({ values }) => isIndex(values.type),
  },
  {
    field: 'gisCompletionTime',
    label: '终孔时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      style: {
        width: '100%',
      },
    },
    ifShow: ({ values }) => isIndex(values.type),
  },
  {
    field: 'gisCompletionDepth',
    label: '终孔深度',
    component: 'InputNumber',
    componentProps: {
      style: {
        width: '100%',
      },
    },
    required: true,
    ifShow: ({ values }) => isIndex(values.type),
  },
  {
    field: 'gisCaptain',
    label: '机长',
    component: 'Input',
    ifShow: ({ values }) => isIndex(values.type),
  },
  {
    field: 'gisRecorder',
    label: '记录员',
    component: 'Input',
    ifShow: ({ values }) => isIndex(values.type),
  },
  {
    field: 'gisComLayerLevel',
    label: '终孔层位',
    component: 'Input',
    ifShow: ({ values }) => isIndex(values.type),
  },
  {
    field: 'gisComWaterLevel',
    label: '终孔水位',
    component: 'InputNumber',
    componentProps: {
      style: {
        width: '100%',
      },
    },
    ifShow: ({ values }) => isIndex(values.type),
  },
  {
    field: 'gisStratumCode',
    label: '地层时代代码',
    component: 'Input',
    ifShow: ({ values }) => isData(values.type),
  },
  {
    field: 'gisLayerId',
    label: '分层ID',
    component: 'Input',
    ifShow: ({ values }) => !isIndex(values.type),
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
    ifShow: ({ values }) => isData(values.type),
  },
  {
    field: 'gisMarkLayer',
    label: '标志/煤层代码',
    component: 'Input',
    ifShow: ({ values }) => isData(values.type),
  },
  {
    field: 'gisCanonicalName',
    label: '岩性代码',
    component: 'Input',
    ifShow: ({ values }) => !isIndex(values.type),
  },
  {
    field: 'gisLithologyDes',
    label: '岩性描述',
    component: 'Input',
    ifShow: ({ values }) => isData(values.type),
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
    ifShow: ({ values }) => !isIndex(values.type),
  },
  {
    field: 'gisCoreLength',
    label: '岩心长度',
    component: 'Input',
    ifShow: ({ values }) => isData(values.type),
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
    ifShow: ({ values }) => isData(values.type),
  },
  {
    field: 'gisStructureLayerId',
    label: '结构分层ID',
    component: 'Input',
    ifShow: ({ values }) => isFeature(values.type),
  },
];
