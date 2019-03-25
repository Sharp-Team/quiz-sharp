import React, { Component } from 'react'
import styled from 'styled-components'

const WrapList = styled.div``

class SuffleQuizs extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  suffleAnswer = (data: any) => {
    data
      .map((a: any) => ({ sort: Math.random(), value: a }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map((a: any) => a.value)
      .splice(1, 4)
  }

  displayQuestion = (value: any, id: number) => {
    return (
      <WrapList>
        <li>
          <span>{value.term}</span>
          <div>
            <input type="button" value="" />
            <span>{value.definition}</span>
          </div>
        </li>
      </WrapList>
    )
  }

  showListQuestion = () => {
    return this.props.data.map((value: any, id: number) =>
      this.displayQuestion(value, id),
    )
  }

  render() {
    return this.showListQuestion()
  }
}

export default SuffleQuizs
