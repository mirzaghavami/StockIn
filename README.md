

## Objective

Your task is to create a simple stock portfolio app using Typescript, Next.Js, and Supabase.

## Brief

The application should allow users to search for stock tickers, view their current price, add them to their portfolio, and view the total value of their portfolio. The app should leverage server-side rendering for the initial load of the portfolio. In terms of UI, you will be utilizing the Shadcn UI kit.

Here are the specific tasks:

1. **Setup Basic App Structure**
    - Bootstrap a new Next.js app using Typescript.
    - Setup Supabase client and connect it to your application.
    - Integrate Shadcn UI kit into the app.

2. **Stock Search Functionality**
    - Create a search bar that allows users to search for stocks by their ticker symbol.
    - Display the current price of the stock returned from the search. For this, you can use the IEX Cloud API which is free and does not require registration.

3. **Portfolio Functionality**
    - Create a Portfolio model in Supabase with the following fields: userId, stockTicker, numberOfShares.
    - Add functionality to add a stock and the number of shares to the user's portfolio.
    - Display a list of all the stocks in the user's portfolio, including the number of shares of each.

4. **Total Portfolio Value**
    - Calculate the total value of the user's portfolio by summing the value of each stock in the portfolio (stock price * number of shares).
    - Display the total portfolio value to the user.

5. **Server-Side Rendering**
    - Implement server-side rendering for the initial load of the portfolio. This means when a user navigates to their portfolio, the server should render the portfolio with all the stocks and the total value already populated.

### Evaluation Criteria

- Code quality and organization
- Completion of the tasks
- Correct implementation of server-side rendering
- Proper usage of Supabase for data management
- Integration of Shadcn UI kit

### CodeSubmit 

Please organize, design, and document your code as if it were going into production - then push your changes to the master branch.

Have fun coding! 🚀

The Pillar Team

