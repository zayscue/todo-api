import * as bodyParser from 'body-parser';
import { container } from './iocContainer';
import { InversifyExpressServer } from "inversify-express-utils";

(async () => {

    const port = 3000;
    let server = new InversifyExpressServer(container);
        server.setConfig((app) => {
        // add body parser
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
    });

    const app = server.build(); 
    app.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}/`)
    });

})();