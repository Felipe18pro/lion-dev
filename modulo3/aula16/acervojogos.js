const readline = require('readline') //importando o readline editado!!

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let jogos = []
let maisRecente = {}

exibirMenu()


function exibirMenu(){
    console.log(
    ` MENU
    1. Cadastrar jogos
    2. Listar jogos
    3. Editar os jogos
    4. Remover jogos
    5. Sair
    `)
     
    rl.question('Escolha a opção: ', (numero) => { // configura as opções com funções
        switch (numero) {
            case '1':
                cadastrarJogos()
                    break
            case '2':
                listarJogos()
                    break
            case '3':
                editarJogos()
                    break
            case '4':
                removerJogos()
                    break
            case '5':
                console.log('Saiu do menu')
                rl.close()
                    break
            defalt:
                console.log("Caracter inválido..")
                exibirMenu()
        }
    } )
}

function cadastrarJogos(){ // pergunta as propriedades do jogo e salva dentro do array
    rl.question('Digite o nome do jogo: ', (nome) => {

        rl.question('Digite o ano de lançamento: ', (ano) => {

            rl.question('Digite o nome da empresa fabricante: ', (nomeEmpresa) => {

                jogos.push({nome: nome, ano: ano, empresa: nomeEmpresa })

                console.log('Jogo cadastrado com sucesso!')

                exibirMenu()
            })
        })
    })
}

function listarJogos(){ // verifica se existem elementos no array e exibe cada um em forma de lista
    
    if(jogos.length > 0){
        console.log('Lista de jogos:')
            jogos.forEach(jogos => {
                console.log(`Nome:${jogos.nome} Ano:${jogos.ano} Nome Da Empresa:${jogos.nomeEmpresa}`)
            })
    }
    else{ 
        console.log("Nenhum jogo cadastrado!")
        
    }
    exibirMenu()
}

function editarJogos(){ // verifica o numero digitado pelo usuario e edita cada propriedade perguntando qual a atualização 
    rl.question('Digite o numero do jogo que deseja editar: ', (numero) => {

        if(numero > 0 && numero <= jogos.length){

            rl.question('Digite o novo nome do jogo: ', (novoNome) => {

                rl.question('Digite o novo ano de fabricação: ', (novoAno) =>{

                    rl.question('Digite a nova empresa: ', (novaEmpresa) =>{

                    jogos[numero - 1] = {
                    nome: novoNome,
                    ano: parseFloat(novoAno),
                    nomeEmpresa: novaEmpresa
                    }
                    console.log('Jogos editados com sucesso')
                    exibirMenu()
                    })
                })
            })
        }else{ // caso digite algum caracter inválido
            console.log('Erro, numero inválido tente novamente')
            exibirMenu()
        }
    })
}

function removerJogos(){ // verifica o numero digitado pelo usuario e remove o elemneto completo 
    rl.question('Digite o numero do item que deseja remover: ', (numero) => {
        if(numero > 0 && numero <= jogos.length){
            jogos.splice(numero -1, 1)
            console.log('Jogo removido com sucesso')
            exibirMenu()
        }else{
            console.log('Numero inválido, por favor tente novamente')
            exibirMenu()
        }
    })
}
