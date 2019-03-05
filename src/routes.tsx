import * as React from 'react'
import { Route } from 'react-router-dom'
import {
  HomePage,
  ListPage,
  FlashCardPage,
  LearnWritePage,
  ListQuizPage,
  LoginPage,
  QuizPage,
  TestPage,
  TrueFalsePage
} from './page'

export const routes = () => (
  <div>
    <Route exact={true} path="/" component={ListPage} />
    <Route path="/home-page" component={HomePage} />
    <Route path="/flashcard" component={FlashCardPage} />
    <Route path="/learn-write" component={LearnWritePage} />
    <Route path="/list-quiz" component={ListQuizPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/quiz" component={QuizPage} />
    <Route path="/test" component={TestPage} />
    <Route path="/truefalse" component={TrueFalsePage} />
  </div>
)

export default routes
