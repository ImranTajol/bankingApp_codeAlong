## Code Along NextJS project (Banking system[Horizon])
- Note: NextJS path is configured based on its file structure

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
[Shadcn](https://shadcn.com/) is utilized to build web application due to its flexibility and efficiency.
- [Shadcn/ui] offers components library which can be easily integrated into project and modified based on preference

## Application Home Page
![image](/images/Banking_HomePage.png)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Extra (NOTE TO SELF)
The elements within a page comprises of multiple components to create a user friendly interface.
- Components can be reused across the project and modification can be implemented by setting the parameters.
- Reusing components offers consistent coding style and ease debugging process

[Action](/lib/actions) - API to the server for banking functionalities

[types](/types) - define object types 

Plaid - Account Authentication (work together with Dwolla) 
Dwolla - Integrate bank payment functionality
Sentry - Software monitoring tool that helps developers identify and debug performance issues and errors
