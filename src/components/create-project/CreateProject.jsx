import { useEffect, useState } from 'react';
import axios from 'axios';
import { FETCH } from '../../Fetch';
import { DOMAIN_URL} from '../../Fetch'
import './../create-project/CreateProject.css'
import {Link} from "react-router-dom";
import {useHistory} from 'react-router-dom'

const CreateProject = () => {

    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});
    const [titleFile, setTitleFile] = useState('');
    const history = useHistory();

  
            const onChangeText = e => {
              setTitleFile(e.target.value);
            }

            const onChange = e => {
              setFile(e.target.files[0]);
              setFileName(e.target.files[0].name);
            }
          
            const handleSubmit = async e => {
              e.preventDefault();
              const formData = new FormData();
              formData.append('file', file)
          
              try {
                const res = await axios.post(`${FETCH}/upload`, formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });
          
                const { fileName, filePath } = res.data
          
                setUploadedFile({ fileName, filePath});
          
              } catch(err) {
               console.log(err)
              }
              axios.post(`${FETCH}/projects`,{project_image : fileName, project_title : titleFile })
              .then(res => {
                console.log(res);
                console.log(res.data);
                history.push("/Admin")
              })
            };

    return (
        <div className="create-project-container">
          <img className="background" src={`${DOMAIN_URL}/assets/gemetric2.jpg`} />
            <h1 className="main-title-create-project ">Create project</h1>
            <form className="form-create-project" onSubmit={handleSubmit} >
                    <div className="label-text-container">
                        <label className="label-text" for="project_title">Project Name</label>
                        <input type="text" id="project_title" onChange={onChangeText} name="project_title"/>
                    </div>
                    <div className="button-container">
                    <label className="label-text" for="project_image">Upload photo</label>
                        <input type="file" onChange={onChange} accept="image/png, image/jpeg, image/jpg" id="project_image" name="project_image" className="label-text"/>
                    </div>
                    <button type="submit" className="label-text-create-project">Add project</button>
                </form>
        </div>
    )

}

export default CreateProject;

