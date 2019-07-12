# [Standard Requests](http://standard-client-files.s3-website.us-east-2.amazonaws.com/)

This project is designed to allow members of a company heirarchy to request any item from their superiors. From there, we go up the tree of superiors until we reach a level that can actually sign off on it.

My project use a react-redux frontend with a nodejs backend server that works on both AWS Lambda and Express with a PostgreSQL database hosted on AWS RDS.

## Main Focuses
* **Security:** SSL, basic-auth, expiring access_tokens, Most importantly I focused on creating a system that any bad actor could only do a small amount of easily reversible actions.
* **Maintainibilty:** Backend API runs on a pure js core service, that my lambda and express functions have to call. This allows me to easily switch between the two or any future lambda api changes. As for the frontend, I rearchitected into redux for more reuseability and way easier understanding.
* **Client Design:** Focusing on a responsive design. Slowly learning the in and outs of UX design as well as proper CSS.
