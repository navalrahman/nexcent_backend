const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const { connectToDB } = require('./config/connect.js');
const pictureRoutes = require('./routes/pictureRoute.js');
const thumbnailOneRoutes = require('./routes/thumbnailoneRoute/thumbnailoneRoute.js');
const thumbnailtwoRoute = require('./routes/thumbnailtwoRote/thumbnailtwoRoute.js')
const thumbnailThreeRoutes = require('./routes/thumbnailthreeRoute/thumbnailthreeRoute.js')
const thumbnailFourRoutes = require('./routes/thumbnailfourRoute/thumbnailfourRoute.js')
const thumbnailfiveRoutes = require('./routes/thumbnailfiveRoute/thumbnailfiveRoute.js')
const thumbnailsixRoutes = require('./routes/thumbnailsixRoute/thumbnailsixRoute.js')
const thumbnailsevenRoutes = require('./routes/thumbnailsevenRoute/thumbnailsevenRoute.js')
const thumbnaileightRoute = require('./routes/thumbnaileightRoute/thumbnaileightRoute.js')
const userRoute = require('./routes/user/userRoute.js')

const app = express();
const PORT = 9000;

// Middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.json());
app.use(cors({
  // origin: ['http://localhost:3000', 'http://localhost:5173'],
  origin: ['https://nexcent-chi-seven.vercel.app/', 'https://nexcent-dashboard.vercel.app/'],
  credentials: true
}));

// app.use(cors({
//   origin: ['http://localhost:3000', 'http:localhost:5173'],
//   credentials: true
// }));

// app.use(cors())
// Routes
app.use('/api', pictureRoutes);
app.use('/api/one', thumbnailOneRoutes);
app.use('/api/two', thumbnailtwoRoute);
app.use('/api/three', thumbnailThreeRoutes);
app.use('/api/four', thumbnailFourRoutes);
app.use('/api/five', thumbnailfiveRoutes);
app.use('/api/six', thumbnailsixRoutes);
app.use('/api/seven', thumbnailsevenRoutes);
app.use('/api/eight', thumbnaileightRoute)

app.use('/api/user', userRoute)

// Connect to DB
connectToDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
