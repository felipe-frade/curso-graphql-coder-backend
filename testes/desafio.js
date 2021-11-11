const db = require('../config/db')

async function salvarUsuario(nome, email, senha){
    let usuario = await db('usuarios')
        .where({ email }).first()
    if(!usuario){
        let [ id ] = await db('usuarios')
            .insert({ nome, email, senha })
        usuario = await db('usuarios').where({ id })
    }else{
        await db('usuarios')
            .where({ id: usuario.id })
            .update({ nome, email, senha })
        usuario = { ...usuario, nome, email, senha }
    }
    return usuario
}

async function salvarPerfil(nome, rotulo){
    let perfil = await db('perfis').where({ nome }).first()
    if(!perfil){
        let [ id ] = await db('perfis').insert({ nome, rotulo })
        perfil = await db('perfis').where({ id })
    }else{
        await db('perfis').where({ id: perfil.id }).update({ nome, rotulo })
        perfil = { ...perfil, nome, rotulo }
    }
    return perfil
}

async function adicionarPerfis(usuario, ...perfis){
    const { email } = usuario
    
    const usuarios = await db('usuarios').where({ email }).first()
    
    if(!usuarios){
        throw new Error('Usuário não existe!')
    }else{
        for(perfil of perfis){
            const usuario_perfil = await db('usuarios_perfis').where({ usuario_id: usuarios.id, perfil_id: perfil.id })
    
            if(usuario_perfil.length == 0){
                await db('usuarios_perfis').insert({ usuario_id: usuarios.id, perfil_id: perfil.id })
            }
        }
    }
}

async function executar() {
    const usuario = await salvarUsuario('Ana 1', 'ana@empresa.com.br', '12345')
    const perfilA = await salvarPerfil('rh', 'Pessoal 1')
    const perfilB = await salvarPerfil('fin', 'Financeiro 1')

    console.log(usuario)
    console.log(perfilA)
    console.log(perfilB)

    await adicionarPerfis(usuario, perfilA, perfilB)
}

executar()
    .catch(err => console.log(err))
    .finally(() => db.destroy())


