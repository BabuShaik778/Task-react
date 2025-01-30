import { ESLint } from "eslint";

module,exports ={
  extends:[
    'ESLint:recommended',
    'plugin:react/recommended'
  ],
  rules:{
    'react/prop-types':'off',
    'no-unsued-vars':'warn'
},
parseOptions:{
  ecamVersion:2020,
  sourceType:'module',
  ecmaFeatures:{
    jsx:true
  }
},
env:{
  browser:true,
  node :true,
  es6:true
 
  }
};