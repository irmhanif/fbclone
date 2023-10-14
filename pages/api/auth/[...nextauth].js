import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider ({
      clientId: 6697226723700825,
      clientSecret: '124cdb08478e594e53e23f73d7ad0213',
    }),
    // ...add more providers here
  ],
})