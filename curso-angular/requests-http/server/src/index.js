const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//  cors que sera usado para acessar a qualquer api no localhost
// const corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));


//  o aquivo sera salvo no proprio projeto apenas para consumir o arquivo com o angular
const multipartMiddleware = multipart({ uploadDir: './uploads' });
app.post('/upload', multipartMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  // poderia passar uma msg de sucesso
  res.json({ message: files });
});

app.get('/downloadExcel', (req, res) => {
 res.download('./uploads/report.xlsx');
});

app.get('/downloadPDF', (req, res) => {
  res.download('./uploads/report.pdf');
});

app.use((err, req, res, next) => res.json({error: err.message}));

app.listen(8000, () => {
  console.log('Servidor iniciado na  porta 8000');
})
