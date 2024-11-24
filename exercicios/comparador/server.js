import express from 'express'
import cors from 'cors'; 
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const app = express()
app.use(cors());
app.use(express.json())
//get, post, put, patch, delete
//listar,criar, editar vários, editar um, deletar

app.get('/registro', async (req, res) =>{
    const users = await prisma.compare.findMany()
    res.status(200).json(users);
})

app.post('/registro',  async (req, res) =>{
    console.log(req.body)
    await prisma.compare.create(
        {
            data:{
                    title: req.body.title,
                    acertos: req.body.acertos
            }
        }
    )
    res.json({ message: "Registro adicionado com sucesso!" });
})

app.put('/registro/:id', async (req, res) =>{
    await prisma.compare.update({
        where: { id: req.params.id },
        data:{
            title: req.body.title,
            acertos: req.body.acertos
    }
    })
})

app.delete('/registro/:id', async (req, res) =>{
    await prisma.compare.delete({
        where: { id: req.params.id },
    })
})

app.listen(3001, () => {
    console.log('Servidor está rodando na porta 3001');
  });