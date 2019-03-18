import * as React from 'react'
import { Route } from 'react-router-dom'
import {
  FlashCardPage,
  HomePage,
  Information,
  LearnWritePage,
  ListQuizPage,
  Profile,
  QuizPage,
  TestMultipleChoicePage,
  TestTrueFalsePage,
} from './page'

export const routes = () => (
  <div>
    <Route exact={true} path="/" component={HomePage} />
    <Route path="/information" component={Information} />
    <Route path="/flashcard" component={FlashCardPage} />
    <Route path="/learn-write" component={LearnWritePage} />
    <Route path="/list-quiz" component={ListQuizPage} />
    <Route path="/quiz" component={QuizPage} />
    <Route path="/test/true_false" component={TestTrueFalsePage} />
    <Route path="/test/multiplechoice" component={TestMultipleChoicePage} />
    <Route path="/profile" component={Profile} />
  </div>
)

export default routes
