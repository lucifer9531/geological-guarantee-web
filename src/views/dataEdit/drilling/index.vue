<template>
  <div>
    <BasicTable @register="registerTable" @selection-change="selectChange">
      <template #toolbar>
        <a-button type="default"> 导入 </a-button>
        <a-button type="primary" @click="handleCreate"> 新增 </a-button>
        <a-button type="danger" :disabled="selectCount === 0" @click="handleDelete">
          删除
        </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              tooltip: '查看钻孔详情',
              onClick: handleView.bind(null, record),
            },
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑钻孔资料',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此数据',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <DrillDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getDrillList, deleteDrill } from '/@/api/dataEdit/drilling';

  import { useDrawer } from '/@/components/Drawer';
  import DrillDrawer from './DrillingDrawer.vue';

  import { searchFormSchema } from './drilling.data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useGo } from '/@/hooks/web/usePage';

  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'MenuManagement',
    components: { BasicTable, DrillDrawer, TableAction },
    setup() {
      const go = useGo();
      const selectCount = ref<number>(0);
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload, setColumns, getSelectRowKeys }] = useTable({
        title: '钻孔列表',
        api: getDrillList,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        ellipsis: true,
        canResize: true,
        rowKey: 'gisBoreholeId',
        rowSelection: {
          type: 'checkbox',
        },
        tableSetting: {
          setting: false,
        },
        afterFetch,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function afterFetch(res: any) {
        const { title = [], list = [] } = res?.data || {};
        handleTableColumns(title);
        setColumns(title);
        return list;
      }

      function handleTableColumns(columns: any[]) {
        columns?.map((item: any) => {
          item['dataIndex'] = item?.prop;
          item['title'] = item.label;
          return item;
        });
      }

      function selectChange(value: any) {
        selectCount.value = value?.keys?.length;
      }

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      function handleSuccess() {
        reload();
      }

      function handleView(record: Recordable) {
        go(`/dataEdit/drilling_detail/${record?.gisBoreholeId}`);
      }

      async function handleDelete(record: Recordable) {
        const selectRowKeys = getSelectRowKeys();
        if (selectRowKeys && Array.isArray(selectRowKeys)) await deleteDrill(selectRowKeys);
        else await deleteDrill(record.gisBoreholeId);
        createMessage.success('删除成功!');
        handleSuccess();
      }

      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleView,
        selectChange,
        selectCount,
      };
    },
  });
</script>
