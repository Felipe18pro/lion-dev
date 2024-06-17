// creat read update delete ; menu com as opções cadastro, exibir, editar, remover|| ex: funcionario1: nome, cargo, salario
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let funcionarios = []
let maior = []

exibirMenu()

function exibirMenu() {
    console.log(`
    Menu:
    1. Cadastrar funcionário
    2. Listar funcionários
        3. Mostrar o funcionario com maior salário
        4. Sair
    `)

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarFuncionarios()
                break
            case '2':
                listarFuncionarios()
                break
            case '3':
                 maiorSalario()
                break
            case '4':
                 rl.close
            default:
                console.log('Opção inválida, tente novamente.')
                rl.close
                break
        }
    })
}

function cadastrarFuncionarios() {
    rl.question('Digite o nome do funcionário: ', (nome) => {
        rl.question('Digite o cargo do funcionário: ', (cargo) => {
            rl.question('Digite o salário do funcionário: ', (salario) => {
                funcionarios.push({ nome: nome, cargo: cargo, salario: salario })
                console.log('Funcionário cadastrado com sucesso!')
                exibirMenu()
            })
        })
    })
}

function listarFuncionarios() {
        if(funcionarios.length == 0){
    console.log(`Nenhum funcionario cadastrado`)
    }else { 
        for(let i = 0; i < funcionarios.length; i++){
    console.log(`Nome: ${funcionarios[i].nome}; Cargo: ${funcionarios[i].cargo} Salario: ${funcionarios[i].salario}`)
    }
    }
    exibirMenu()
}

function maiorSalario(){
    if (funcionarios.length == 0){
        console.log(`Nenhum funcionario cadastrado`)
        exibirMenu()
    }else
    for(let i = 0; i < funcionarios.length; i++){
    if(funcionarios[i].salario > maior){
        maior = funcionarios[i]
        console.log(`nome: ${maior.nome} Cargo: ${maior.cargo} Salario: ${maior.salario}`)
        exibirMenu()
    }
    }
}