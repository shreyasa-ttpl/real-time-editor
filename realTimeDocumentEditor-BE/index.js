const { PrismaClient } = require('@prisma/client');
const express = require('express');
// const sequelize = require('./db/sequelize');
// const Document = require('./models/document');
const { uuid } = require('uuidv4');


const prisma = new PrismaClient()

// sequelize.sync()
//     .then(() => {
//         console.log('Database synced');
//     })
//     .catch((error) => {
//         console.error('Unable to sync the database:', error);
//     });

const io = require("socket.io")(3001, {
    cors: {
        origin: true,
        methods: ["GET", "POST"],
    },
})

const app = express();
const port = 3000;

const defaultValue = ""

io.on("connection", socket => {
    socket.on("fetch-document", async documentId => {
        const document = await findOrCreateDocument(documentId)
        console.log("document", document)
        socket.join(documentId)
        socket.emit("initial-document", document.content)

        socket.on("send-text-changed", delta => {
            console.log("delta", delta)
            socket.broadcast.to(documentId).emit("receive-text-changed", delta)
        })

        socket.on("save", async data => {

            console.log("🚀 ~ data:", data)
            const document = await prisma.documents.findFirst({
                where: {
                    documentId
                }
            }).then(async (find) => {

                await prisma.documents.update({
                    where: {
                        id: find.id
                    },

                    data: {
                        content: data
                    }
                })


            })
        })
    })
})

async function findOrCreateDocument(id) {
    if (id == null) return

    const document = await prisma.documents.findFirst({
        where: {
            documentId: id
        }
    })
        .then(async (document) => {
            if (document) {
                return document
            }

            return await prisma.documents.create({
                data: {
                    id: uuid(),
                    documentId: id,
                }
            })

        })

    if (document) return document

    return newDocument
}

// app.listen(port, () => {
//     console.log(`App running on http://localhost:${port}`);
// });