const accountSid = process.env.TWILIO_ACCOUNT_ID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Dear Puja, you are doing great by walking 10K steps a day!',
     from: '+19383333181',
     to: '+918830168773'
   })
  .then(message => {
    console.log(message.sid)
  });