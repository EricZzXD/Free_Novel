## Server Deployment (Centos 7, Nginx)

### Procedures

 - Git Clone from this git repository 
 - (Require download Node.js ----> `sudo yum install nodejs` -----> And Update to V12)
 - `npm install`   -----------> Install the dependencies
 - `npm run build` <br/>
  Builds the app for production to the `build` folder.<br />
  It correctly bundles React in production mode and optimizes the build for the best performance.<br />
  The build is minified and the filenames include the hashes.<br />
  Your app is ready to be deployed!<br />
  
 - Install Nginx -----------> `sudo yum install nginx`
 - cd to the Nginx Config and add  
     ``` server{
    listen 80;
    server_name flask_app;
    root /home/Free_Novel/frontend_react/build;
    index index.html index.htm;
    location / {
        # try_files $uri $uri/ @router;
        try_files $uri $uri/ /index.html;
        index index.html;
      }
 
 
 
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
