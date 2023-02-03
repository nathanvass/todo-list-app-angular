import { Timestamp } from '@firebase/firestore-types';

export interface Todo {
    id: string;
    description: string;
    dueDate: Timestamp;
  doneDate?: Timestamp;
  }