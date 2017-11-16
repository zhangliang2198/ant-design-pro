import dynamic from 'dva/dynamic';

// models
import UserModel from '../models/user';
import RuleModel from '../models/rule';

// components
import BasicLayout from '../layouts/BasicLayout';
import TableList from '../routes/List/TableList';

// wrapper of dynamic
const dy = (app, models, component) => dynamic({
  app,
  models: () => models,
  component: () => component,
});

// nav data
export const getNavData = app => [
  {
    component: dy(app, [UserModel], BasicLayout),
    layout: 'BasicLayout',
    name: '首页', // for breadcrumb
    path: '/',
    children: [
      {
        name: '查询表格',
        path: 'table-list',
        component: dy(app, [RuleModel], TableList),
      },
    ],
  },
];
