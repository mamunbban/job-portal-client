import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplication = () => {
    const applications = useLoaderData()
    const handleStatusChange = (e, id)=>{
        // (e.target.value, id);

        const data = {
            status: e.target.value
        
        }

        fetch(`http://localhost:5000/job-applications/${id}`, {
            method: "PATCH",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => 
            console.log(data)
        )
    }
    return (
        <div>
            <h2>View Application:{applications.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            applications.map((application, index) => <tr key={application._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{application.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>
                                    <select
                                    onChange={(e)=>handleStatusChange(e, application._id)}
                                    defaultValue={application.status || 'change status'}
                                    className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;