import React, { Component } from 'react'
import { UserBridge } from '../../bridges/bridges';
// import { User } from './types/User';
import BridgeManager, { Bridge } from '../../bridges/bridge-manage';
import '../../App.css'
import { Table, Header } from 'semantic-ui-react'
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
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Page</Table.HeaderCell>
          <Table.HeaderCell>Link</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        <Table.Row>
          <Table.Cell>Home Page</Table.Cell>
          <Table.Cell>
            <Link to="/home-page">Link</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>List Quiz</Table.Cell>
          <Table.Cell>
            <Link to="/list-quiz">Link</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Login</Table.Cell>
          <Table.Cell>
            <Link to="/login">Link</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Quiz Page</Table.Cell>
          <Table.Cell>
            <Link to="/quiz">Link</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Flash Card</Table.Cell>
          <Table.Cell>
            <Link to="/flashcard">Link</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Learn Write</Table.Cell>
          <Table.Cell>
            <Link to="/learn-write">Link</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Test</Table.Cell>
          <Table.Cell>
            <Link to="/test">Link</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>True/ False</Table.Cell>
          <Table.Cell>
            <Link to="/truefalse">Link</Link>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header as='h1'>Quiz Sharp</Header>
          <p>
            { this.tableAllPage() }
          </p>
        </header>
      </div>
    )
  }
}

export default ListPage
