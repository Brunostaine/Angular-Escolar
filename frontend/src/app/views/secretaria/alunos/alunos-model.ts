export interface Alunos {
    id?: number
    nome: string
    turma?: string
    dataNascimento: string
    nomeMae: string
    nomePai?: string
    nacionalidade: string
    cpf: string
    email: string
    telefoneResponsavel: string
    telefoneResponsavel2: string
    tipoSanguineo: string
    serie: string

    sexo?: string
    estadoCivil?: string
    localNascimento?: string
    cor?: string
    idade?: string
    necessidadesEspeciais?: string
    rg?: string
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