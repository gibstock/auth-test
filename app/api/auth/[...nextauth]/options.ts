import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        password: {
          label: "Password:",
          type: "password",
          placeholder: "nextauth"
        },
      },
      async authorize(credentials) {
        const user = {
          id: "42",
          name: "Dave",
          password: process.env.USER_PASSWORD
        }
        if(credentials?.password.trim() === user.password) {
          return user;
        }else {
          return null;
        }
      }
    })
  ],
}