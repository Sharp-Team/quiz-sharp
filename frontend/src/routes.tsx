import * as React from 'react'
import { Route } from 'react-router-dom'
import {
  Information,
  ListPage,
  FlashCardPage,
  LearnWritePage,
  ListQuizPage,
  QuizPage,
  TestPage,
  TrueFalsePage,
  Profile,
  HomePageGuest,
  HomePageUser,
} from './page'

export const routes = () => (
  <div>
    <Route exact={true} path="/" component={ListPage} />
    <Route path="/home-page" component={Information} />
    <Route path="/flashcard" component={FlashCardPage} />
    <Route path="/learn-write" component={LearnWritePage} />
    <Route path="/list-quiz" component={ListQuizPage} />
    <Route path="/quiz" component={QuizPage} />
    <Route path="/test" component={TestPage} />
    <Route path="/truefalse" component={TrueFalsePage} />
    <Route path="/profile" component={Profile} />
    <Route path="/home-page-guest" component={HomePageGuest} />
    <Route path="/home-page-user" component={HomePageUser} />
  </div>
)

export default routes
