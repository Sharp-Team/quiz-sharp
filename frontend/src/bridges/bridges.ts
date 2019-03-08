import { Bridge } from './bridge-manage';
import User from '../types/User';
import Quiz from '../types/Quiz';

export interface UserBridge extends Bridge {
    getAllUser(): Promise<User[]>;
}

export interface QuizBridge extends Bridge {
    getAllQuiz(): Promise<Quiz[]>;
}