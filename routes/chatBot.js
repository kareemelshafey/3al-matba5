const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');



const express = require('express');
const router = express.Router();
const service = new AssistantV1({ 
  version: '2019-02-28',
  authenticator: new IamAuthenticator({
    apikey: 'E3VBZU1rwsJiJBCYrNsaGb6oNZ4IznmXvntkBdrFB90y',
  }),
  url: 'https://gateway-lon.watsonplatform.net/assistant/api'
});
 
router.post('/', async (req, res) => {
    console.log(req.body.input)
    await service.message({
        workspaceId: '44bb09f9-58bf-49bb-be95-7bf07e829aee',
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