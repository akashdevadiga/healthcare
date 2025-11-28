import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import shiftRoutes from './routes/shift.routes.js';
import rolesRoutes from './routes/roles.routes.js';
import errorHandler from './middleware/errorHandler.js';
import AppError from './utils/AppError.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/roles', rolesRoutes);
app.use('/shifts', shiftRoutes);

app.use((req, res, next) => next(new AppError('Not Found', 404)));

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
