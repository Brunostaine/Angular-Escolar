export interface Alunos {
    id?: number
    nome: string
    turma?: string
    dataNascimento: string
    nomeMae: string
    nomePai?: string
    nascionalidade: string
    cpf: string
    email: string
    telefoneResponsavel: string
    telefoneResponsavel2: string
    tipoSanguineo: string
    serie: string

    sexo?: string
    estadoCivil?: string
    localNascimento?: string
    idade?: number
    necessidadesEspeciais?: string
    rg?: number
    orgaoExpedidor?: string
    dataExpedicao?: string
    uf?: string
    
    cep: string
    logradouro: string
    numero: string
    complemento?: string
    bairro: string
    estado: string
}