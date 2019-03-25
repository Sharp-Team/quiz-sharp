import { Bridge } from './bridge-manage'
import User from '../types/User'
import Quiz from '../types/Quiz'
import SetStudy from '../types/SetStudy'
import { Profile } from '../page';

export interface UserBridge extends Bridge {
  getAllUser(): Promise<User[]>
  register(
    username: string,
    password: string,
    avatar_url: string,
    email: string,
    dob: any,
  ): string
  signin(username: string, password: string): string
  profile(username: string): User
}

export interface QuizBridge extends Bridge {
  getListQuizByID(idSetStudy: number): Promise<Quiz[]>
  editQuiz(id: number, term: string, definition: string): string
  deleteQuiz(id: number): string
}

export interface SetStudyBridge extends Bridge {
  getListSetStudyByUser(
    username: string,
    pageCurrent: number,
  ): Promise<SetStudy>
  getListSetStudy(pageCurrent: number): Promise<SetStudy>
  getTotalPageSetStudyByUser(username: string): number
  getTotalPageSetStudy(): number
  deleteSetStudy(id: number): string
  editSetStudy(
    id: number,
    title: string,
    updatedDate: any,
    listQuiz: any,
  ): string
  addSetStudy(
    username: string,
    title: string,
    createdDate: any,
    listQuiz: any,
  ): string
}
