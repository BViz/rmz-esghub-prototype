import https from 'https';

const options = {
  hostname: 'img.freepik.com',
  port: 443,
  path: '/free-photo/realistic-water-drop-with-ecosystem_137098368.jpg',
  method: 'HEAD',
  headers: {
    'User-Agent': 'Mozilla/5.0',
  }
};

const req = https.request(options, (res) => {
  console.log(res.statusCode);
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
