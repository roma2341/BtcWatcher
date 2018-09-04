
var express = require('express');

const router = express.Router();

 router.get('/',  (req, res) => {

});

router.get('/:name', async (req, res) => {
    // Extract the name from the request parameters
    let { name } = req.params;
    console.log('name:'+name);
    res.send('ok');
});

// Export the express.Router() instance to be used by server.ts
export const WelcomeController = router;