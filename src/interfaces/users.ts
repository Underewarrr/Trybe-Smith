interface IUser {
  username: string;
  classe: string;
  level: number;
  password?: string;
}

interface Id extends IUser {
  id: number,
}

export { 
  Id, 
  IUser, 
};