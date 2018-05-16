import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import BaseComponent from 'components/BaseComponent';
import Panel from 'components/Panel';
const { Content } = Layout;

@connect()
export default class ColumnPage extends BaseComponent {
  render() {
    return (
      <Layout className="full-layout page column-page">
        <Content>
          <Panel title="说明">
            <h3>Column 语法</h3>
            <p>通过配制Column可同时生成我们页面中的三大块元素、搜索条（高级搜索）组件、新增修改的表单组件、带分页的数据表格组件。</p>
            
          </Panel>
        </Content>
      </Layout>
    );
  }
}
