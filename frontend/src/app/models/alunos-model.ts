export interface Alunos {
    id?: number
    nome: string
    cpf: string
    rg?: string
    uf?: string
    dataExpedicao?: string
    orgaoExpedidor?: string
    nacionalidade: string
    nomeMae: string
    nomePai?: string
    sexo?: string
    cor?: string
    email: string
    dataNascimento: string
    localNascimento?: string
    idade?: string
    telefoneResponsavel: string
    telefoneResponsavel2: string
    tipoSanguineo: string
    necessidadesEspeciais?: string

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