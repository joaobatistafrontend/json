const objs = [
    {
    "nome":"joao",
    "idade": 22,
    "trabahando": true,
    "detalhes_da_profissao":{
        "profissao": "progamador",
        "empresa": "intgest"
    },
    "hobbies": ["progamar","correr"]
},{
    "nome":"batista",
    "idade": 22,
    "trabahando": false,
    "detalhes_da_profissao":{
        "profissao": "null",
        "empresa": "null"
    },
    "hobbies": ["estuda","jogar"]
}
]

// converter objeto para json
const jsonData = JSON.stringify(objs)
console.log(jsonData)

// converter json para objeto 
const objData = JSON.parse(jsonData)
console.log(objData)


objData.map((pessoa)=>{
    console.log(pessoa.nome)
    console.log(pessoa.trabahando)
})