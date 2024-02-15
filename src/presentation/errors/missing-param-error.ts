export class MissingParamError extends Error{
    constructor(paramName: string){
        super(`O parâmetro obrigatório "${paramName}" não foi providenciado no corpo da requisição`)
        this.name = 'MissingParamError'
    }
}