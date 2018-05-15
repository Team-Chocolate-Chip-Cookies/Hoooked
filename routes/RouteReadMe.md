# Route File ReadMe

This file is intended to explain what each route file actually does.


# isLogIn.js

isLogIn.js contains a function that uses passport to check if a user is logged in or not when they hit server routes.  If not logged in they are sent to the signIn page.   This prevents non signed in users from hitting routes, adding data, without being logged in.

#routeTestsDB.js

routeTestsDB.js is used to test various routes.  This is purely a troubleshooting route file and upon deployment we can probabbly comment it out entirely. 

# auth.js

auth.js is tied to passport that does our authentication, signUp, signIn

# movieRoutes.js

movieRoutes.js allows:

- Viewing all movies.
- Searching a movie by title.
- Adding a movie to the DB.

