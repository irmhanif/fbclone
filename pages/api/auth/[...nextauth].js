import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider ({
      clientId: '****',
      clientSecret: '****',
    }),
    // ...add more providers here
  ],
})