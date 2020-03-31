import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

const Upload = () => {

    const [profileImg, setProfileImg] = useState('');
    const [users, setUsers] = useState([]);

    const onFileChange = e => {
        setProfileImg(e.target.files[0]);
    }

    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profileImg', profileImg);
        axios.post('http://localhost:4000/api/user-profile', formData, {
        }).then(res => {
            console.log(res);
        })
        getUsers();
    }

    async function getUsers() {
        const res = await axios.get('http://localhost:4000/api');
        setUsers(res.data.users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container-fluid mt-3">
            <h1 className="text-center mb-4">Upload Images to MongoDB</h1>
            <Form onSubmit={onSubmit}>
                <div className="mb-3">
                    <Form.File id="formcheck-api-custom" custom>
                        <Form.File.Input isValid onChange={onFileChange} />
                        <Form.File.Label data-browse="Select Image">
                            Select Image...
                        </Form.File.Label>
                    </Form.File>
                    <Button className="float-right mt-2" type="submit" block>Upload image to a database</Button>
                </div>
            </Form>
            
            {users.map(user => (
                <img key={user._id} src={user.profileImg} alt={user._id} className="w-25 mt-5"/>
            ))}
        </div>
    )
}

export default Upload;