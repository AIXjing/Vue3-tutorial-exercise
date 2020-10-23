# vue3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


##Log in modal
#### Firebase console - create new project - authentication
    #create firebase.js file in unitilites
    #Add Firebase SDKs and initialize Firebase 
       # npm install --save firebase
       # add code below into the file
       import * as firebase from "firebase";
       import "firebase/auth";
       import "firebase/firestore";
       
       const firebaseConfig = {
           apiKey: "AIzaSyDeRoHNraCfH__kFZgCjBrE6sjrAeXYf_U",
           authDomain: "vue3-tutorial-exercise.firebaseapp.com",
           databaseURL: "https://vue3-tutorial-exercise.firebaseio.com",
           projectId: "vue3-tutorial-exercise",
           storageBucket: "vue3-tutorial-exercise.appspot.com",
           messagingSenderId: "843775905975",
           appId: "1:843775905975:web:ec13b8352a2c09444ffd32"
       }

       firebase.initializeApp(firebaseConfig)
       
       export default firebase;
