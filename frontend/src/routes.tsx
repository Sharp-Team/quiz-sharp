import * as React from 'react'
import { Route } from 'react-router-dom'
import {
  Information,
  FlashCardPage,
  LearnWritePage,
  ListQuizPage,
  QuizPage,
  TestPage,
  TrueFalsePage,
  Profile,
  HomePage
} from './page'

export const routes = () => (
  <div>
    <Route exact={true} path="/" component={HomePage} />
    <Route path="/information" component={Information} />
    <Route path="/flashcard" component={FlashCardPage} />
    <Route path="/learn-write" component={LearnWritePage} />
    <Route path="/list-quiz" component={ListQuizPage} />
    <Route path="/quiz" component={QuizPage} />
    <Route path="/test" component={TestPage} />
    <Route path="/truefalse" component={TrueFalsePage} />
    <Route path="/profile" component={Profile} />
  </div>
)

export default routes
