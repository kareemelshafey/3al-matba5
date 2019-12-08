const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');


const config= require('../config')
const express = require('express');
const router = express.Router();
const service = new AssistantV1({ 
  version: '2019-02-28',
  authenticator: new IamAuthenticator({
    apikey: process.env.WatsonApiKey||config.WatsonApiKey,
  }),
  url: process.env.WatsonUrl||config.WatsonUrl
});
 
router.post('/', async (req, res) => {
    console.log(req.body.input)
    await service.message({
        workspaceId: process.env.WatsonWorkSpaceId||config.WatsonWorkSpaceId,
      input: {'text':req.body.input},

      })

      .then(resp=>{
          res.json({data:  resp.result.output.text[0]})
          console.log(resp.result.output.text[0])
      }

     )
      .catch(err => {
        console.log(err);


      });

    }
);



  module.exports = router 