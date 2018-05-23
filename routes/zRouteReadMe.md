# Route File ReadMe

This file is intended to explain what each route file does.


# auth.js

auth.js is tied to passport that does our authentication, signUp, signIn

# followRoutes.js

followRoutes.js allows:

- Find all users.
- Add a follower.
- Remove a follower.

# forgotRoutes.js

forgotRoutes.js allows: 

-  Users to say they forgot their password via a route.
-  forgotRoutes sends an email with a token, adds a token and expiration to the user DB entery.
-  Users recieve an email with a token / route to reset their password.
-  forgotRoutes will update their profile with a new password that is hashed.

#hookRoutes.js

- Display all hooks for the given user (using their logged in ID).
- Display hooks that a user sent.
- Create a new hook.

# isLogIn.js

isLogIn.js is not a route, it is a function that is used in the routes to limit actions to a logged in user.  Most functions will not work even if you remove isLoggedIn as it requires the session to hold a req.user.id.

# movieRoutes.js

- Reads all moves from DB.
- Find a movie by title.
- Add a movie to a local DB.

# musicRoutes.js

musicRoutes.js allows:

- Reads all music from our DB.
- Searches music from DB by title.
- Adds new music to our DB.

# routeTestsDB.js

routeTestsDB.js was used to test, do not use these routes.

# userRoutes.js

userRoutes.js allows:

- Read all users from the DB.
- Search for user by their registered email.

# movieRoutes.js

movieRoutes.js allows:

- Viewing all movies.
- Searching a movie by title.
- Adding a movie to the DB.


