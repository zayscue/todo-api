export interface Request<TResult> {

}

export interface RequestHandler<TRequest extends Request<TResult>, TResult> {
    
    request: string;
    
    handleRequest(request: TRequest) : Promise<TResult>;
}