const db = require('../config/db')

const novoUsuario = {
    nome: 'pedro',
    email: 'teste@teste.com',
    senha: '1234'
}

async function exercicio() {
    const { qtd } = await db('usuarios').count('* as qtd').first()

    if(qtd == 0){
        await db('usuarios').insert(novoUsuario)
    }


    let { id } = await db('usuarios').select('id').limit(1).first()

    await db('usuarios').where({ id })
        .update({ nome: 'teste' })

    return await db('usuarios').where({ id })
}

exercicio()
    .then(usuario => console.log(usuario))
    .finally(() => db.destroy())
