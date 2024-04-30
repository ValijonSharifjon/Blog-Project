import 'react-quill/dist/quill.snow.css'
import { useState } from "react";
import {Navigate} from "react-router-dom";
import Editor from "../Editor.tsx";


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState<any>([]);
    const [redirect, setRedirect] = useState(false);

    const createNewPost = async (ev: any) => {
        ev.preventDefault();

        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        if (files.length > 0) {
            data.set('file', files[0]);
        }

        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include'
        });

        if (response.ok) {
            setRedirect(true)
        }
    }

    if (redirect) {
        return <Navigate to="/" />
    }
    return (
        <form onSubmit={createNewPost}>
            <input
                type="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="summary"
                placeholder="Summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
            />
            <input type="file" onChange={(e) => setFiles(e.target.files)} />
            <Editor value={content} onChange={setContent} />
            <button style={{ marginTop: '5px' }}>Create post</button>
        </form>
    );
};

export default CreatePost;
