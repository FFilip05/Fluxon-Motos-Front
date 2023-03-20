import { createServer } from "./src/server";
const port = process.env.PORT || 5001;
const server = createServer();

const start = async () => {
  try {
    (await server).listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
