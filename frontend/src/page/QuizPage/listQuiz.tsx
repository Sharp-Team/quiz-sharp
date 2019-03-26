import React, { Component } from 'react'
import styled from 'styled-components'
import { QuizBridge } from '../../bridges/bridges'
import BridgeManager from '../../bridges/bridge-manage'
import { ToastContainer, toast } from 'react-toastify'
import { connect } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import {
  IconEditGray,
  IconDelete,
  IconCancel,
  IconDone
} from '../../images'

const WrapQuizs = styled.div`
  .wrap-quiz {
    box-shadow: 0 2px 5px grey;
    padding-bottom: 35px;
    padding-top: 35px;
    border-radius: 10px;
    display: flex;
    margin-bottom: 25px;
    .wrap-term {
      border-right: 1px solid #b7b7b7;
      padding-right: 40px;
      padding-left: 35px;
      padding-bottom: 10px;
      width: 35%;
      display: inline-block;
      .input-term {
        width: 100%;
        height: 100%;
        display: block;
        resize: none;
        overflow: hidden;
      }
    }
    .wrap-definition {
      position: absolute;
      width: 45%;
      left: 40%;
      .input-definition {
        width: 100%;
        border: none;
      }
    }
    .wrap-listIcon {
      position: absolute;
      right: 4%;
      .icon-delete {
        padding-left: 25px;
      }
      .icon-delete:hover,
      .icon-edit:focus {
        color: #f06292;
      }
      .icon-edit {
        padding-left: 50px;
        width: 72px;
      }
      .icon-edit:hover,
      .icon-edit:focus {
        color: #f06292;
      }
    }
  }
`

class ContentQuiz extends Component<any, any> {
  // @ts-ignore
  _quizBridge: QuizBridge

  constructor(props: any) {
    super(props)
    this.state = {
      indexQuiz: -1,
      termChange: '',
      definitionChange: '',
    }
  }

  async  componentDidMount() {
    this._quizBridge = await BridgeManager.getBridge<QuizBridge>('quizBridge')
    console.log(this.props.user)
  }

  editQuiz = (id: number, term: string, definition: string) => {
    this.setState({
      indexQuiz: id,
      termChange: term,
      definitionChange: definition
    })
  }

  cancleEdit = () => {
    this.setState({
      indexQuiz: -1,
    })
  }

  updateQuiz = (id: number) => {
    const result: any = this._quizBridge.editQuiz(this.state.indexQuiz, this.state.termChange, this.state.definitionChange)
    // exit edit mode
    this.setState({
      indexQuiz: -1
    })
    // update data props
    this.props.data[id].term = this.state.termChange
    this.props.data[id].definition = this.state.definitionChange
    // notify result
    toast.success('Edit successful!!!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  changeValue = (event: any) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  deleteQuiz = (idIndex: number, idQuiz: any) => {
    this.props.data.splice(idIndex, 1)
    // update props
    this.props.updateQuiz(this.props.data)
    this.props.quiz.term -= 1
    const result: any = this._quizBridge.deleteQuiz(idQuiz)
    // notify result
    toast.success('Delete successful!!!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      })
  }

  renderQuiz = (value: any, id: number) => {
    if (value.id !== this.state.indexQuiz) {
      return (
        <WrapQuizs key={id}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
          />
          <div className="wrap-all">
            <div className="wrap-quiz">
              <div className="wrap-term">
                <span>{value.term}</span>
              </div>
              <div className="wrap-definition">
                <span>{value.definition}</span>
              </div>
              <div className="wrap-listIcon">
                <img
                  onClick={() => this.deleteQuiz(id, value.id)}
                  className="icon-delete"
                  src={IconDelete}
                  alt="Icon delete"
                />
                <img
                  onClick={() => this.editQuiz(value.id, value.term, value.definition)}
                  className="icon-edit"
                  src={IconEditGray}
                  alt="Icon edit"
                />
              </div>
            </div>
          </div>
        </WrapQuizs>
      )
    } else {
      return (
        <WrapQuizs key={id}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
          />
          <div className="wrap-all">
            <div className="wrap-quiz">
              <div className="wrap-term">
                <input
                  type="text"
                  name="termChange"
                  className="form-control"
                  value={this.state.termChange}
                  onChange={event => this.changeValue(event)}
                />
              </div>
              <div className="wrap-definition">
                <input
                  type="text"
                  name="definitionChange"
                  className="form-control"
                  value={this.state.definitionChange}
                  onChange={event => this.changeValue(event)}
                />
              </div>
              <div className="wrap-listIcon">
                <img
                  onClick={() => this.updateQuiz(id)}
                  className="icon-edit"
                  src={IconDone}
                  alt="Icon done"
                />
                <img
                  onClick={() => this.cancleEdit()}
                  className="icon-edit"
                  src={IconCancel}
                  alt="Icon edit"
                />
              </div>
            </div>
          </div>
        </WrapQuizs>
      )
    }
  }

  render() {
    return this.props.data.map((value: any, id: number) =>
      this.renderQuiz(value, id),
    )
  }
}

function mapStateToProps(state: any) {
  const user = state.user
  return { user }
}

export default connect(mapStateToProps)(ContentQuiz)
