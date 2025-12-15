import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./database";
import User from "@/models/Users";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        emailAddress: {},
        password: {},
      },

      authorize: async (credentials) => {
        await connectDB();

        const user = await User.findOne({
          emailAddress: credentials.emailAddress as string,
        });

        if (!user) {
          throw new Error("Invalid credentials");
        } else {
          const isCorrectPassword = await bcrypt.compare(
            credentials.password as string,
            user.password as string,
          );
          if (!isCorrectPassword) {
            throw new Error("Invalid credentials");
          } else {
            return {
              id: user._id.toString(),
              email: user.emailAddress,
            };
          }
        }
      },
    }),
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    session: ({ session, token }) => {
      session.user.id = token.id as string;
      return session;
    },
  },
});
