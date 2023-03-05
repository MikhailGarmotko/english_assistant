export interface User {
  username?: string;
  email?: string;
  id?: number;
  password?: string;
}

export interface UserProfile {
  user: {
    username?: string;
    email?: string;
    id?:number;
  }
}

export interface UserPayLoad {
  
  payload: {
    username?: string;
    email?: string;
    id?:number;
  }
}

export interface inputData {
  username: string;
  password: string;
  email: string;
}

export interface Word {
  word: string;
  users?: User[];
  words:Word[];
}

export interface List {
  list:[];
}
