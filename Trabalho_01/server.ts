import express from "express";
import cors from "cors"
import { AppDataSource } from "./src/data-source";
import rockerRoutes from './src/routes/rockerRoutes'
import bandRoutes from './src/routes/bandRoutes'
import healthRoutes from './src/routes/healthRoutes'

const app = express();
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 4000;

AppDataSource.initialize().then(() => {
    console.log('Data Source has been initialized!');
    
    app.use('/webmob/', rockerRoutes);
    app.use('/webmob/', bandRoutes);
    app.use('/webmob/', healthRoutes)
    
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }).catch((error) => {
    console.error('Error during Data Source initialization:', error);
  }
)
