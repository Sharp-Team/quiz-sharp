import { Bridge } from './bridge-manage';
import User from '../types/User';

export interface UserBridge extends Bridge {
    getAllStudent(): Promise<User[]>;
}