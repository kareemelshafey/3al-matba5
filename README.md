# 3al-matba5
Advanced Computer Lab Project
Done by : - Ahmed Hashem
          - Kareem Elshafey
          - Muhammad Sharaf
          
You could download our app from the following link :
        https://expo.io/artifacts/59c6265f-1749-42f2-a60f-39b9a36ea16a 
        
Heroku deployment link :
        https://secure-caverns-33420.herokuapp.com
        
Example of our config.js file 

    module.exports ={
        mongoDB:'mongodb+srv://kareemkimo39:kareemesam-123@cluster0-ap5yc.mongodb.net/test?retryWrites=true&w=majority',
        WatsonApiKey:'E3VBZU1rwsJiJBCYrNsaGb6oNZ4IznmXvntkBdrFB90y',
        WatsonUrl:'https://gateway-lon.watsonplatform.net/assistant/api',
        WatsonWorkSpaceId:'44bb09f9-58bf-49bb-be95-7bf07e829aee'
    }

If you want to use environment variables just type the name of the variable and its value before node server.js then it will work for example 
mongoDB = 'mongodb+srv://kareemkimo39:kareemesam-123@cluster0-ap5yc.mongodb.net/test?retryWrites=true&w=majority' node server
