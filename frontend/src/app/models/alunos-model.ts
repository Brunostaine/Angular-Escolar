export interface Alunos {
    id?: number
    nome: string
    email: string
    cpf: string
    rg?: string
    nomeMae: string
    nomePai?: string
    sexo?: string
    cor?: string
    telefoneResponsavel: string
    telefoneResponsavel2: string
    dataNascimento: string
    idade?: string
    tipoSanguineo: string
    necessidadesEspeciais?: string

    uf?: string
    dataExpedicao?: string
    orgaoExpedidor?: string
    nacionalidade: string
    localNascimento?: string

    estadoCivil?: string
    turma?: string
    serie: string

    
    cep: string
    logradouro: string
    numero: string
    complemento?: string
    bairro: string
    estado: string
}