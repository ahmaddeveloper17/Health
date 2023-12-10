// import { users } from "@/helpers/constants";
// import NextAuth, { NextAuthOptions } from "next-auth/next";
// import { CredentialsProvider } from "next-auth/providers/credentials";


// const authOptions: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "creds",
//             Credentials: {
//                 email: { label: "Email", placaholder: "Enter Email" },
//                 password: { label: "Password", placaholder: "Password" },
//             },
//             async authorize(credentials) {
//                 if (!credentials || !credentials.email || !credentials.password)
//                     return null;
//                 const user = users.find((item)) => item.email === credentials.email);
//             })
//         ]
//          }
// if (user?.password === credentials.password) {
//     return user;
// }
// return null;
//             },
           
// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };









// import { users } from "@/helpers/constants";
// import NextAuth, { NextAuthOptions } from "next-auth/next";
// import { CredentialsProvider } from "next-auth/providers/credentials";

// const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "creds",
//       credentials: {
//         email: { label: "Email", placeholder: "Enter Email" },
//         password: { label: "Password", placeholder: "Password" },
//       },
//       async authorize(credentials) {
//         if (!credentials || !credentials.email || !credentials.password) {
//           return null;
//         }

//         const user = users.find((item) => item.email === credentials.email);

//         if (user && user.password === credentials.password) {
//           return Promise.resolve(user);
//         }

//         return Promise.resolve(null);
//       },
//     }),
//   ],
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };




import { users } from "@/helpers/constants";
import NextAuth, { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "creds",
      credentials: {
        email: { label: "Email", placeholder: "Enter Email" },
        password: { label: "Password", placeholder: "Password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const user = users.find((item) => item.email === credentials.email);

        if (user && user.password === credentials.password) {
          return Promise.resolve(user);
        }

        return Promise.resolve(null);
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
