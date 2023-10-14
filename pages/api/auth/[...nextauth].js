import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: 193942112840209,
      clientSecret: '175dadc9dd72763ed5f5ffba2eb2042a',
    }),
    // ...add more providers here
  ],
})