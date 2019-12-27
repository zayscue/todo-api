import { Request, RequestHandler } from './request'

export interface Mediator {
    send<TRequest extends Request<any>>(request: TRequest) : Promise<any>;
}

export class RequestMediator implements Mediator {

    private handlers: any = {};

    constructor(handlers: RequestHandler<Request<any>, any>[]) {
        for(let i = 0; i < handlers.length; i++) {
            let handler = handlers[i];
            this.handlers[handler.request] = handler;
        }
    }

    send<TRequest extends Request<any>>(request: TRequest): Promise<any> {
        const handler = this.handlers[request.constructor.name] as RequestHandler<TRequest, any>;
        return handler.handleRequest(request);
    }
}