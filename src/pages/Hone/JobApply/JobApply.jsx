import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';

const JobApply = () => {
    const {user}= UseAuth()
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(user);

    



    const submitJobApply = e =>{
        e.preventDefault()
        const form = e.target;
        const LinkedIn = form.LinkedIn.value;
        const GitHub = form.GitHub.value;
        const Resume = form.Resume.value;

        console.log(LinkedIn, GitHub, Resume);

        const jobApplication ={
            job_id: id,
            applicant_email: user.email,
            LinkedIn,
            GitHub,
            Resume
        }

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
           if(data.insertedId){
            alert('done')
            navigate('/myApplications')
           }
        })

    }
    return (
        
                
                <div className="card bg-base-100 w-full   shadow-2xl">
                    <h1 className='text-4xl font-bold text-center'>Apply job And GoodLuck</h1>
                    <form onSubmit={submitJobApply} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">LinkedIn URL</span>
                            </label>
                            <input type="url" name='LinkedIn' placeholder="LinkedIn" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Github URL</span>
                            </label>
                            <input type="url" name='GitHub' placeholder="GitHub URL" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume URL</span>
                            </label>
                            <input type="url" name='Resume' placeholder="Resume URL" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </form>
                </div>
           
    );
};

export default JobApply;