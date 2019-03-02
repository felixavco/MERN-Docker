const express = require('express');
var cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;
let mode = "DEVELOPMENT";

app.use(cors());

if(process.env.NODE_ENV === 'production') {
  mode = "PRODUCTION"
}

app.get('/test', (req, res) => {
  res.status(200).json({msg: `This site is in ${mode} mode`});
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
} else {
	app.use((req, res) => {
		res.send('<p>Invalid route please read the API documentation</p>');
	});
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
