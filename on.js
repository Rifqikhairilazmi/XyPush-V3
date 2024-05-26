var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>XyPush || Uptime</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f4f4f4;
        }
        .container {
          text-align: center;
          background: white;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }
        h1 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>XyPush || Uptime!!</h1>
      </div>
    </body>
    </html>
  `);

  res.end();
}).listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});