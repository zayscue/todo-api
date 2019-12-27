import { container } from './iocContainer';
import { InversifyExpressServer } from "inversify-express-utils";

(async () => {

    const port = 3000;
    const app = new InversifyExpressServer(container);
    const server = app.build();
    
    server.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}/`)
    });

})();