import React, { Component } from 'react'
import styled from 'styled-components'
import shuffle from 'shuffle-array'

const WrapList = styled.div`
  .wrap-all-li {
    padding-bottom: 20px;
    .id-hidden {
      display: none;
    }
    .wrap-term {
      margin: 0 5px;
    }
    .wrap-list {
      font-weight: lighter;
      padding-top: 5px;
      .wrap-item {
        padding: 2px 1px;
        .btn-check {
          margin-left: 2px;
        }
        .item-definition {
          margin-left: 30px;
        }
      }
    }
  }
`

class SuffleQuizs extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  displayQuestion = (value: any, id: number) => {
    return (
      <WrapList>
        <li className="wrap-all-li">
          <span className="id-hidden">{value.id}</span>
          <span className="wrap-term">{value.term}</span>
          <div className="wrap-list">
            <div className="wrap-item">
              <input
                type="radio"
                className="form-check-input btn-check"
                name="optradio"
              />
              <span className="item-definition">{value.suffleDefinition[0][0].toString()}</span>
            </div>
            <div className="wrap-item">
              <input
                type="radio"
                className="form-check-input btn-check"
                name="optradio"
              />
              <span className="item-definition">
                {value.suffleDefinition[0][1].toString()}
              </span>
            </div>
            <div className="wrap-item">
              <input
                type="radio"
                className="form-check-input btn-check"
                name="optradio"
              />
              <span className="item-definition">
                {value.suffleDefinition[0][2].toString()}
              </span>
            </div>
            <div className="wrap-item">
              <input
                type="radio"
                className="form-check-input btn-check"
                name="optradio"
              />
              <span className="item-definition">
                {value.suffleDefinition[0][3].toString()}
              </span>
            </div>
          </div>
        </li>
      </WrapList>
    )
  }

  _suffle = (data: any[], tempResult: any[], answer: any) => {
    shuffle.pick(data, { 'picks': data.length }).filter(e => e.definition === answer )
    .map(e => {
    tempResult.push(e.definition)
    })
    shuffle.pick(data, { 'picks': 8 }).filter(e => e.definition !== answer )
    .splice(1, 3)
    .map(e => {
      tempResult.push(e.definition)
    })
    return tempResult.sort(() => {
      return .5 - Math.random()
    })
  }
  shuffleAnwser = (data: any[], dataQuiz: any[]) => {
    for (let item of data) {
      let element = Object.create(null)
      element = {
        id: 0,
        term: '',
        suffleDefinition: []
      } 
      element.id = item.id
      element.term = item.term
      const answer = item.definition
      let tempResult: any = [] 
      let shuffleResult = this._suffle(data, tempResult, answer)
      element.suffleDefinition.push(shuffleResult)
      dataQuiz.push(element)
    }
    console.log(dataQuiz)
  }

  render() {
    const data: any[] = this.props.data
    const dataQuiz: any[] = []
    this.shuffleAnwser(data, dataQuiz)
    return dataQuiz.map((value: any, id: number) =>
      this.displayQuestion(value, id),
    )
  }
}

export default SuffleQuizs
