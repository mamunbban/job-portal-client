import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobsCard = ({ job }) => {
    const {_id, title, company_logo, company, requirements, description, location, salaryRange } = job;
    
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
           <div className='flex gap-4 m-4'>
           <figure>
                <img
                className='w-16'
                    src={company_logo}
                    alt="logo" />
            </figure>
            <div>
                <h1>{company}</h1>
                <p className='flex  items-center gap-1'><FaMapMarkerAlt /> {location}</p>
            </div>
           </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        requirements.map((skill,index) => <p key={index} className='border rounded-lg text-center p-2 hover:text-white hover:bg-blue-400 hover:cursor-pointer'>{skill}</p>)
                    }
                </div>
                
                <div className="card-actions justify-end items-center">

                    <p className='flex items-center '>Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}><button className="btn btn-accent">Apply</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;