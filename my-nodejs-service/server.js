const express = require('express');
const app = express();

app.get('/', (req, res) => {
  //res.send('Hello from App Engine!');
  //res.send(JSON.stringify(req.query));  //enviar parametros desde el servidor http://localhost:8080/?a=5&b=4
  //enviar();
});

app.get('/send', (req, res) => {
  enviar();
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

function enviar() {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey("SENDGRID_API_KEY");
  const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'fgasshsadsdhaksdhsjdnbcsjhdksjdajhdhs',
    html: 'prueba 004',
  };
  sgMail.send(msg);
}

//configuraciones para el entorno de ejecución de su servicio de App Engine. (ARCHIVO APP.YAML)