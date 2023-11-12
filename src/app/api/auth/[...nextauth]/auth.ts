import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";  

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // to be removed once published
export const config = {
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const credentialDetails = {
          username: credentials?.username,
          password: credentials?.password,
        }; 
        const res = await fetch("https://localhost:7090/User/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentialDetails),
        });

        const user = await res.json();     
        if (user.success) {
          return user;
        } else { 
          throw new Error(user.message)
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_APP_SECRET_KEY as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  callbacks: {
    async jwt({ user, token, account }) {
      // update token from user    
      if (user) { 
        if (account?.provider != "credentials") {
          token.name = user.name; 
          token.id = user.name;
        } else { 
          token.name = user.info.firstname + ' ' + user.info.lastname;
          token.id = user.info.id;
        }
      }
      return token;
    },
    async session({ session, token }) {
      // update session from token 
      session.user = token
      return session;
    },
  },
  pages: {
    signIn: "/sign-in"
  },
  session: {
    strategy: 'jwt'
  },
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}