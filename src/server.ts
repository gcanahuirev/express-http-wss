import http from 'http';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import { serve, setup } from 'swagger-ui-express';
import swagger from './swagger.json';
// import  { WebSocketServer, Server } from 'ws';
import { logger } from '@tinyhttp/logger';
/* import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import routes from './routes/index'; */

/* applyMiddleware(middleware, app);
applyRoutes(routes, app);
applyMiddleware(errorHandlers, app); */

const app: Express = express();
const PORT = process.env.PORT || 3000;
const server: http.Server = http.createServer(app);
// const wss: WebSocketServer = new Server({server})

/* ======= MIDDLEWARE ======= */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger({ timestamp: { format: 'HH:mm:ss' } }));
app.use('/docs', serve, setup(swagger));

/* ======= ROUTES ======= */
// app.use(routes)
app.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

server.listen(PORT, () =>
  console.log(`🚀 Server running ➜ http://localhost:${PORT}`),
);
