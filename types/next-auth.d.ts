import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { DefaultUser } from "next-auth";
declare module "next-auth" {
  interface Session {
    user?: DefaultUser.user & { token: string };
  }

  interface User {
    id: string;
    role: number;
    token: string;
    info: any;
  } 
}
