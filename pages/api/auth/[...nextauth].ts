import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";
import { isSamePassword } from "../../../helpers/index"

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        // find out user from db
        // if (email !== "john@gmail.com" || password !== "1234") {
        //   throw new Error("invalid credentials");
        // }
        
        const user = await prisma.user.findUnique({
            where: {
              email: email
            },
        })

        if(!user){
            throw new Error("Invalid credentials.");
        }

        const test = await bcrypt.compare(password, user.password).then((result) => {
            return result;
        });

        if(!test){
            throw new Error("Password Incorrect");
        }

          return user;
        // if everything is fine
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    async jwt(params) {
      // update token
      // if (params.user?.role) {
      //   params.token.role = params.user.role;
      // }
      // return final_token
      return params.token;
    },
  },
};

export default NextAuth(authOptions);