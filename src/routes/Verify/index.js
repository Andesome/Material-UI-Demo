import React, { Component } from "react";
import { connect } from "dva";
import Cookies from 'js-cookie'
import qs from "qs";

// 权限校验页面
@connect(({ user }) => ({
  user
}))
class Verify extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {}
    };
  }

  componentWillMount() {
    const { token } = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    if (token) {
      this.props.dispatch({
        type: "user/fetchUser",
        authorization: token,
        success: () => {
          Cookies.set('token',token);
          this.props.history.replace('/home')
        },
        error:()=>{

        }
      });
    }
  }

  render() {
    return <div>跳转中...</div>;
  }
}

export default Verify;