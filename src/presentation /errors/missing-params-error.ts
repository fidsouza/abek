export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Missign Param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
