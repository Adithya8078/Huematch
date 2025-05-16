// types/user.d.ts
export interface User {
    id: string;
    password: string;
  }
  
  // Extend JWT Payload for Type Safety
  declare module "jsonwebtoken" {
    export interface JwtPayload {
      id: string;
      password: string;
    }
  }
