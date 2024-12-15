import React from 'react';
import Swal from 'sweetalert2';
import UseAuth from '../../hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

const Adjob = () => {
    const {user} = UseAuth()
    const navigate = useNavigate()

    const handleAddJob = e => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        // (initialData);
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        // (newJob);


        fetch('http://localhost:5000/jobs',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            // (data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved in database",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/myPostedJob')
            }
        })
    }


    return (
        <div>
            <h2>Post A Job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Job Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* Job Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name='location' placeholder="Job Location" className="input input-bordered" required />

                </div>
                {/* Job Type
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <input type="text" placeholder="Job Location" className="input input-bordered" required />

                </div> */}
                {/* Job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select name='type' defaultValue={'Pick the best Job'} className="select select-ghost w-full max-w-xs input-bordered">
                        <option disabled >Pick the best Job </option>
                        <option>Full Time</option>
                        <option>Intern</option>
                        <option>Part-Time</option>
                    </select>

                </div>
                {/* Job Category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Category</span>
                    </label>
                    <select name='category' defaultValue={'Pick the best Job'} className="select select-ghost w-full max-w-xs input-bordered">
                        <option disabled >Pick the best Job </option>
                        <option>Engineer</option>
                        <option>Apps Development</option>
                        <option>Finance Manager</option>
                        <option>Digital Marketing</option>
                    </select>

                </div>
                {/* Salary Range */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Salary Range</span>
                    </label>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <input type="text" name='min' placeholder="min" className="input input-bordered" required />
                        <input type="text" name='max' placeholder="max" className="input input-bordered" required />


                        {/* Currency */}
                        <div className="form-control">

                            <select name='currency' defaultValue={'Currency'} className="select select-ghost input-bordered w-full max-w-xs">
                                <option disabled >Currency </option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>RUPEE</option>
                                <option>US </option>
                            </select>

                        </div>
                    </div>

                    {/* Job Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>

                        <textarea className="textarea textarea-bordered" placeholder="Description" name='description' required></textarea>
                    </div>
                    {/* Job Requirements */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Requirements</span>
                        </label>

                        <textarea className="textarea textarea-bordered" placeholder="Write your Requirements each single line" name='requirements' required></textarea>
                    </div>
                    {/* Job Responsibilities */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Responsibilities</span>
                        </label>

                        <textarea className="textarea textarea-bordered" placeholder="Write your Responsibilities each single line" name='responsibilities' required></textarea>
                    </div>

                    {/* Company name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input type="text" name='company' placeholder="Company name" className="input input-bordered" required />
                    </div>
                    {/* Company logo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company logo</span>
                        </label>
                        <input type="url" name='company_logo' placeholder="Company logo" className="input input-bordered" required />
                    </div>
                    {/* Status */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input type="text" name='status' placeholder="active" className="input input-bordered" required />
                    </div>
                    {/* Deadline */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date"  name='applicationDeadline' placeholder="Deadline" className="input input-bordered" required />
                    </div>
                    {/* Hr email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">hr_email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name='hr_email' placeholder="email" className="input input-bordered" readOnly />
                    </div>
                    {/* Hr Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">hr_name</span>
                        </label>
                        <input type="text" name='hr_name' placeholder="name" className="input input-bordered" required />
                    </div>



                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Adjob;