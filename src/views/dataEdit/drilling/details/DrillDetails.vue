<template>
  <PageWrapper :title="`钻孔` + gisBoreholeId + `的资料`" contentBackground @back="goBack">
    <BasicTable @register="registerTable" @selection-change="selectChange">
      <template #toolbar>
        <a-button type="danger" :disabled="selectCount === 0" @click="handleDelete">
          删除
        </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            // {
            //   icon: 'clarity:info-standard-line',
            //   tooltip: '查看钻孔详情',
            //   onClick: handleView.bind(null, record),
            // },
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
    <DrillDetailsDrawer @register="registerDrawer" @success="handleSuccess" />
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { deleteDrillDetails, getDrillDetailsList } from '/@/api/dataEdit/drilling';

  import { useDrawer } from '/@/components/Drawer';
  import DrillDetailsDrawer from './DrillDetailsDrawer.vue';

  import { useRoute } from 'vue-router';
  import { PageWrapper } from '/@/components/Page';
  import { useGo } from '/@/hooks/web/usePage';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'DrillDetails',
    components: { PageWrapper, BasicTable, DrillDetailsDrawer, TableAction },
    setup() {
      const route = useRoute();
      const go = useGo();
      const selectCount = ref<number>(0);
      const { createMessage } = useMessage();
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { setColumns, getSelectRowKeys, reload }] = useTable({
        api: getDrillDetailsList,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        ellipsis: true,
        canResize: true,
        rowKey: 'gisGid',
        rowSelection: {
          type: 'checkbox',
        },
        tableSetting: {
          setting: false,
        },
        beforeFetch,
        afterFetch,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });
      const gisBoreholeId = route.params?.id;

      function beforeFetch(params: any) {
        params['id'] = gisBoreholeId;
      }

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

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      async function handleDelete(record: Recordable) {
        const selectRowKeys = getSelectRowKeys();
        if (selectRowKeys && Array.isArray(selectRowKeys)) await deleteDrillDetails(selectRowKeys);
        else await deleteDrillDetails(record.gisBoreholeId);
        createMessage.success('删除成功!');
        handleSuccess();
      }

      function handleSuccess() {
        reload();
      }

      function goBack() {
        go('/dataEdit/drilling');
      }

      return {
        gisBoreholeId,
        goBack,
        registerTable,
        registerDrawer,
        handleEdit,
        getSelectRowKeys,
        handleSuccess,
        handleDelete,
        selectChange,
        selectCount,
      };
    },
  });
</script>
<style></style>
