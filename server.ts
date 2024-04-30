import dotenv from "dotenv";
import express, { Request, Response, Application } from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./models";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import orderRoutes from "./routes/orderRoutes";
import brandRoutes from "./routes/brandRoutes";
import reviewRoutes from "./routes/reviewRoutes";

// initialize configuration
dotenv.config();

const app: Application = express();

// Use morgan middleware with the "combined" format
app.use(morgan("dev"));

// Use cookie-parser middleware
app.use(cookieParser());

// Enable using APIs from everywhere
app.use(cors());

// Data coming from HTML forms
app.use(express.urlencoded({ extended: true }));

// Data coming as JSON - POSTMAN for instace
app.use(express.json());

// port is now available to the Node.js runtime
// as if it were an environment variable
const port:any = process.env.SERVER_PORT;

const start = async (): Promise<void> => {
  try {
    await db.sequelize.sync();
    // tslint:disable-next-line:no-console
    console.log(`Databases synced Successfully`);
    app.listen(port,'0.0.0.0', () => {
      // tslint:disable-next-line:no-console
      console.log(`Server running at port:${port}`);
    });
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error);
    // Exits the process with an error status code
    process.exit(1);
  }
};
// Invokes the function to start the server
void start();

app.get("/", (req: Request, res: Response, err: any) => {
  res.send("E-Commerce Website Backend Service for Group#3 TAP-SD-0224");
});

// use routes in the routes folder
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);

// If route does not exist, redirect to the root
app.use((req: Request, res: Response, err: any) => {
  res.redirect("/");
});

export default app;
