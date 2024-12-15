import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const { user } = UseAuth()
    const [jobs, setJobs] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // (data);
                setJobs(data)

            })
    }, [user.email])
    return (
        <div>
            <h2 className='text-3xl text-center font-bold mb-12'>My Posted Jobs:{jobs.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job Type</th>
                            <th>Job Category</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            jobs.map((job, index) => <tr key={job._id} className="bg-green-200">
                                <th>{index +1}</th>
                                <td>{job.title}</td>
                                <td>{job.type}</td>
                                <td>{job.category}</td>
                                <td>{job.company}</td>
                                <td><Link to={`/viewApplication/${job._id}`}><button className='btn btn-link'>View Application</button></Link></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;