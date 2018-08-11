import React, { Component } from 'react';
import qs from 'qs';
import { connect } from 'dva';
import {Button} from 'antd';
import { ResponsiveHeader } from '../../components/Header';
import Article from '../../components/Article';
import { Content } from '../../components/Layout';

@connect(({ article,loading }) => ({
  article,
  loading
}))
export default class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      args: qs.parse(props.location.search, { ignoreQueryPrefix: true }),
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { args } = this.state;
    dispatch({
      type: 'article/fetch',
    })
    dispatch({
      type: 'article/fetchDetail',
      articleId: args.id
    })
  }

  render() {
    const { article,loading } = this.props;
    return (
      <section>
        <ResponsiveHeader />
        <Content 
          className="home-box" 
          style={{ marginTop: 30 }}
          loading={loading.models.article}
        >
          <h1> Blog detail </h1>
          <Article data={article.detail} {...this.props} />
        </Content>
      </section>
    );
  }
}