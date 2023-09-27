import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: "TestId",
      clientSecret: "TestSecret"
    }),
  ],
};

export default NextAuth(authOptions);