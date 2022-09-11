# Contact Management App
- A responsive mobile-friendly application for contact management via user informarion
- Provide friendly user interface and  user experience

# Features:
- Table: pagination, sort, search (by name or username)
- Contact Page: autocomplete searching (by name or username), google map

# Techs and npm packages:
-  node: 16
-  react-router-dom: route Management
-  @reduct/toolkit: state, and api management
-  @react-google-maps/api: display google map location

# Run the App
- Add GoogleMapAPIKey: add your GoogleMapAPIKey in src/components/addressCard/map/Map.jsx
- With Node: v16 (require npm cli)
  - Install npm package: npm Install
  - Run the app: npm start (http://localhost:3000/)
- With Docker: (require docker destop, and docker cli at https://docs.docker.com/get-docker/)
  - Build image: docker build -t resonate-test .
  - Run container: docker run -p 3000:3000 resonate-test (http://localhost:3000/)

# Deploy docker to AWS elastic beanstalk
- eb init
- eb create
- eb use enviroment-name
- eb deploy




