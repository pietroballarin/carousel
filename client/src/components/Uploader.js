import React, { useState } from 'react';
import axios from 'axios';



export default function Uploader() {

    const [imgTitle, setImgTitle] = useState('');
    const [fileData, setFileData] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    

    const handlePictureSelect = (e) => {
        setFileData(e.target.files[0])
    }

    function handleSubmit(e)  {
        e.preventDefault()
        
        const formData = new FormData();
        
        formData.append('imgTitle', imgTitle);
        formData.append('imgUrl', fileData);

        axios.post('/api/pictures', formData)
        .then((uploadedPicture) => {
            console.log(uploadedPicture)
            setSuccessMsg('Image Uploaded Correctly');
        })
        .catch(() => {
            setErrorMsg('Upload Failed')
        })
    }

    return(
        <>    
        <h1>hey</h1>
          <form onSubmit={handleSubmit} >
            <label htmlFor="imgTitle">Title</label>
            <input
                id="imgTitle"
                name="imgTitle"
                type="text"
                value={imgTitle}
                onChange={e => setImgTitle(e.target.value)}
            />
            <label htmlFor="imgUrl"> Choose a file </label>
            <input
            required
            type="file"
            name="file"
            onChange={e => handlePictureSelect(e)}
            />
            <button type="submit">Upload Picture</button>
          </form>
        </>
    )

}