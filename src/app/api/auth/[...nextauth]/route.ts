import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"; 

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // to be removed once published

const handler =  NextAuth ({
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
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else { 
          return null;
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
  // pages: {
  //   signIn: "/sign-in"
  // }
});

export { handler as GET, handler as POST }