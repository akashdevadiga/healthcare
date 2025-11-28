import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/user.routes.js';
import errorHandler from './middleware/errorHandler.js';
import AppError from './utils/AppError.js';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);

app.use((req, res, next) => next(new AppError('Not Found', 404)));

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
