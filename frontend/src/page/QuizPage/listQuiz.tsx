import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconEditGray, IconDelete } from '../../images'

const WrapQuizs = styled.div`
  .wrap-quiz {
    box-shadow: 0 2px 5px grey;
    padding-bottom: 35px;
    padding-top: 35px;
    border-radius: 10px;
    display: flex;
    margin-bottom: 25px;
    .wrap-term {
      border-right: 2px solid #707070;
      padding-right: 40px;
      padding-left: 35px;
      padding-bottom: 10px;
      width: 35%;
      display: inline-block;
      .input-term {
        width: 100%;
        height: 100%;
        display: block;
        border: none;
        resize: none;
        overflow: hidden;
      }
      .form-control {
        border: none;
      }
    }
    .wrap-definition {
      position: absolute;
      width: 50%;
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
      }
      .icon-edit:hover,
      .icon-edit:focus {
        color: #f06292;
      }
    }
  }
`

class ContentQuiz extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      indexQuiz: -1,
      termChange: '',
      definitionChange: '',
    }
  }

  editQuiz = (id: number) => {
    this.setState({
      indexQuiz: id,
    })
  }

  cancleEdit = () => {
    this.setState({
      indexQuiz: -1,
    })
  }

  changeValue = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  edit = () => {
    this.props.data[this.state.indexQuiz] = {
      term: this.state.termChange,
      definition: this.state.definitionChange,
    }
    this.props.updateQuiz(this.props.data)
    this.setState({
      indexQuiz: -1,
    })
  }

  deleteQuiz = (id: any) => {
    this.props.data.splice(id, 1)
    this.props.updateQuiz(this.props.data)
  }

  renderQuiz = (value: any, id: number) => {
    if (id !== this.state.indexQuiz) {
      return (
        <WrapQuizs>
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
                  onClick={() => this.deleteQuiz(id)}
                  className="icon-delete"
                  src={IconDelete}
                  alt=""
                />
                <img
                  onClick={() => this.editQuiz(id)}
                  className="icon-edit"
                  src={IconEditGray}
                  alt=""
                />
              </div>
            </div>
          </div>
        </WrapQuizs>
      )
    } else {
      return (
        <WrapQuizs>
          <div className="wrap-all">
            <div className="wrap-quiz">
              <div className="wrap-term">
                <input
                  type="text"
                  name="termChange"
                  className="form-control"
                  onChange={event => this.changeValue(event)}
                  placeholder={value.term}
                />
              </div>
              <div className="wrap-definition">
                <input
                  type="text"
                  name="definitionChange"
                  className="form-control"
                  onChange={event => this.changeValue(event)}
                  placeholder={value.definition}
                />
              </div>
              <div className="wrap-listIcon">
                <img
                  onClick={() => this.deleteQuiz(id)}
                  className="icon-edit"
                  src={IconDelete}
                  alt=""
                />
                <img
                  onClick={() => this.editQuiz(id)}
                  className="icon-edit"
                  src={IconEditGray}
                  alt=""
                />
              </div>
            </div>
          </div>
        </WrapQuizs>
      )
    }
  }

  showListQuiz = () => {
    return this.props.data.map((value: any, id: number) =>
      this.renderQuiz(value, id),
    )
  }

  render() {
    return this.showListQuiz()
  }
}

export default ContentQuiz
