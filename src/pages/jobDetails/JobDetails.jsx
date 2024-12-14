import React from 'react';
import { FaLocationArrow, FaMapMarkerAlt, FaMarker } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData()
    const {_id,title,jobType,requirements, company,company_logo,description,location,applicationDeadline
    } = job;
    console.log(job);
    
    return (
        <div className='w-8/12 mt-12 mb-12 space-y-4 mx-auto border border-solid bg-green-200 border-red-300 p-6'>
            <img src={company_logo  } alt="" />
            <h2 className='font-bold text-2xl'>Apply for {title}</h2>
            <p className='bg-green-300 rounded-lg p-4'>Description: {description}</p>
            <p>Job Type: {jobType}</p>
            {/* <p className=''>Requirements: {requirements}</p> */}
            <p>Company: {company}</p>
            <p className='flex items-center'><FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
            <p>Deadline: {applicationDeadline
            }</p>
            
            <Link to={`/jobApply/${_id}`}>
            <button className='btn btn-outline '>Apply now!</button>
            </Link>
        </div>
    );
};

export default JobDetails;