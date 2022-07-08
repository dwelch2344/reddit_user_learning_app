export interface NavIconType {
  icon: string;
  alt: string;
  to: string;
}

export interface ACHeaderProps {
  username: string;
  online: boolean;
}

export interface SignupFormType {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface UpdateFormType {
  bio: string;
  name: string;
}

export interface LoginFormType {
  email: string;
  password: string;
}

export interface UsersQueryProp {
  users: [
    {
      username: string;
      active: boolean;
    }
  ];
}