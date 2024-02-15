export class GradeNotValidError extends Error{
    constructor(grade: number){
        super(`A nota ${grade} não é válida! insira um numero positivo menor ou igual a 10`)
        this.name = 'GradeNotValidError'
    }
}