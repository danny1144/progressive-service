import router from '../router/index';
<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline" router>
        <a-sub-menu
          v-for="(item, index) in menu.items"
          :index="`menu-item-${index}`"
          :key="`menu-item-${index}}`"
        >
          <template v-slot:title>
            <span
              ><user-outlined /><span>{{ item.title }}</span></span
            >
          </template>
          <a-menu-item
            v-for="(subItem, subIndex) in item.items"
            :key="`menu-item-${index}-${subIndex}`"
            :index="subItem.path"
            ><router-link :to="subItem.path">{{ subItem.title }}</router-link></a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import { getCurrentInstance, watch,unref  } from 'vue';
export default {
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  },
  setup() {
    const { ctx } = getCurrentInstance();
    const $route = unref(ctx.$router.currentRoute);

    watch(()=>$route,(newval,oldval)=>{
      console.log('newval',newval)
      console.log('oldval',oldval)
    })
    return {
      collapsed: false,
      selectedKeys: ['menu-item-0-0'], //默认选中菜单
      menu: {
        items: [
          {
            title: '内容管理',
            items: [
              { title: '首页', path: '/' },
              { title: '课程管理', path: '/courses/list' },
              { title: '课时管理', path: '/episodes/list' },
            ],
          },
          {
            title: '运营管理',
            items: [{ title: '用户管理', path: '/users/list' }],
          },
        ],
      },
    };
  },
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
