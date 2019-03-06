import React, { Component } from 'react'
import { UserBridge } from '../../bridges/bridges';
// import { User } from './types/User';
import BridgeManager, { Bridge } from '../../bridges/bridge-manage';
import '../../App.css'
import { Link  } from "react-router-dom";

class ListPage extends Component {
  // @ts-ignore 2564
  _userBridge: UserBridge;

  state = {
    listUser: null
  }

  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    // this._userBridge = await BridgeManager.getBridge<UserBridge>(
    //   'userBridge'
    // );
    // const user = await this._userBridge.getAllStudent();
    // console.log({ user })
  }

  tableAllPage = () => (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Page</th>
          <th scope="col">Link</th>
          <th scope="col">Assign</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Trang thông tin</td>
          <td><Link to="/home-page">Link</Link></td>
          <td>Hòa, Hiệp</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Danh sách quiz của một user</td>
          <td><Link to="/list-quiz">Link</Link></td>
          <td>Hiệp, Hoàng, Hòa </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Trang chủ của user</td>
          <td><Link to="/home-page-user">Link</Link></td>
          <td>Hiệp, Hoàng </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Trang chủ của guest</td>
          <td><Link to="/home-page-guest">Link</Link></td>
          <td>Hiệp, Hoàng </td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Đăng nhập</td>
          <td><Link to="/login">Link</Link></td>
          <td>Hiệp</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Đăng ký</td>
          <td><Link to="/register">Link</Link></td>
          <td>Trang</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Trang cá nhân</td>
          <td><Link to="/profile">Link</Link></td>
          <td>Trang</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Trang Quiz</td>
          <td><Link to="/quiz">Link</Link></td>
          <td>Nhật Hòa</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>FlashCard</td>
          <td><Link to="/flashcard">Link</Link></td>
          <td>Hòa, Hiệp</td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>Học Write</td>
          <td><Link to="/flashcard">Link</Link></td>
          <td>Hòa, Hiệp, Nhật</td>
        </tr>
        <tr>
          <th scope="row">11</th>
          <td>Test</td>
          <td><Link to="/test">Link</Link></td>
          <td>Hòa, Hiệp, Nhật</td>
        </tr>
        <tr>
          <th scope="row">12</th>
          <td>Test True/False</td>
          <td><Link to="/truefalse">Link</Link></td>
          <td>Hòa, Hiệp, Nhật</td>
        </tr>
      </tbody>
    </table>
  )

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Quiz Sharp</h1>
          { this.tableAllPage() }
        </header>
      </div>
    )
  }
}

export default ListPage
