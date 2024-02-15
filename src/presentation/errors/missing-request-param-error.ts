export class MissingRequestParamError extends Error{
    constructor(paramName: string){
        super(`O parâmetro obrigatório "${paramName}" não foi providenciado`)
        this.name = 'MissingRequestParamError'
    }
}