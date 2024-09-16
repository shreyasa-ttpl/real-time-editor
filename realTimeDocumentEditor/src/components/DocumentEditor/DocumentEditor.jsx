
import 'quill/dist/quill.snow.css'
import Quill from 'quill'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {v4 as uuid} from 'uuid'

import {io} from 'socket.io-client'
import { Button } from 'reactstrap'

const DocumentEditor=()=>{

    const [socket, setSocket]=useState()
    const [quill, setQuill]=useState()

    const navigate=useNavigate()

    const {id} =useParams()
    console.log("id",id)

    useEffect(()=>{
        const socketInstance=io(import.meta.env.VITE_API_BACKEND_URL)
        setSocket(socketInstance)

        return ()=>{
            socketInstance.disconnect()
        }
    },[])

    useEffect(()=>{
        if(!socket||!quill) return

        const sendTextChange=(delta, oldDelta, source)=>{
            if(source!=='user'){
                return
            }
            console.log("delta", delta)
            socket.emit('send-text-changed', delta)
        }
        quill.on('text-change',sendTextChange)

        return ()=>{
            quill.off('text-change',sendTextChange)
        }
    },[socket,quill])

    useEffect(()=>{
        if(!socket||!quill) return

        const receiveTextChange=(delta)=>{
            quill.updateContents(delta)
        }
        socket.on('receive-text-changed', receiveTextChange)

        return ()=>{
            socket.off('receive-text-changed',receiveTextChange)
        }
    },[socket,quill])

    useEffect(()=>{
        if(!socket||!quill) return

        socket.once('initial-document', document=>{
            quill.setContents(document)
            quill.enable()
        })

        socket.emit('fetch-document',id)

    },[socket,quill,id])

    useEffect(()=>{
        if(!socket||!quill) return

        const interval = setInterval(()=>{
            console.log("fdfdsfsd",quill.getContents())
            socket.emit('save',quill.getContents())
        },2000)

        return ()=>{
            clearInterval(interval)
        }
    },[socket,quill])

    const editorRef=useCallback((wrapper)=>{
        if(!wrapper) return
        wrapper.innerHTML=''
        const editor=document.createElement('div')
        wrapper.append(editor)
        const quillInstance=new Quill(editor, {theme:'snow'})
        quillInstance.disable()
        setQuill(quillInstance)
    },[])

    return <>
        <div className='d-flex flex-column justify-content-center'>
        <Button className='w-25' onClick={()=>navigate(`/document/${uuid()}`)}>Create New</Button>
        <div id='editor-container' ref={editorRef}></div>
        </div>
    </>
}

export default DocumentEditor