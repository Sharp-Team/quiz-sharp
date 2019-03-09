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
    listUser: null,
    data: [
      { id: '1', page: 'Trang thông tin', link: 'home-page', assign: 'Hòa, Hiệp', status: 'bg-success' },
      { id: '2', page: 'Danh sách quiz của một user', link: 'list-quiz', assign: 'Hiệp Hòa Hoàng', status: 'bg-warning' },
      { id: '3', page: 'Trang chủ của user', link: 'home-page-user', assign: 'Hiệp Hoàng', status: 'bg-warning' },
      { id: '4', page: 'Trang chủ của guest', link: 'home-page-guest', assign: 'Hiệp Hoàng', status: 'bg-warning' },
      { id: '5', page: 'Đăng nhập', link: 'login', assign: 'Hiệp', status: 'bg-success' },
      { id: '6', page: 'Đăng ký', link: 'register', assign: 'Trang', status: 'bg-danger' },
      { id: '7', page: 'Trang cá nhân', link: 'profile', assign: 'Trang', status: 'bg-danger' },
      { id: '8', page: 'Trang Quiz', link: 'quiz', assign: 'Hòa Nhật', status: 'bg-warning' },
      { id: '9', page: 'FlashCard', link: 'flashcard', assign: 'Hòa', status: 'bg-danger' },
      { id: '10', page: 'Học Write', link: 'learn-write', assign: 'Hòa, Nhật', status: 'bg-danger' },
      { id: '11', page: 'Test', link: 'test', assign: 'Hiệp, Nhật', status: 'bg-danger' },
      { id: '12', page: 'Test True/False', link: 'truefalse', assign: 'Hiệp, Nhật', status: 'bg-danger' },
    ]
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
          {
            this.state.data.map((item: any) => 
            <tr className={`${item.status} text-white`}>
              <th scope="row">{item.id}</th>
              <td>{item.page}</td>
              <td><Link to={`/${item.link}`}>Link</Link></td>
              <td>{item.assign}</td>
            </tr>
            )
          }
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
