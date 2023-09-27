import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github"

const handler =  NextAuth ({
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_APP_SECRET_KEY as string,
    })
  ]
});

export { handler as GET, handler as POST }