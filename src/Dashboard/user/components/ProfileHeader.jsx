import React from 'react';
import {
    FaGithub, FaLinkedin, FaGlobe, FaGoogleDrive
} from 'react-icons/fa';



const ProfileHeader = () => {
    
    const openLinkedin = () => {
        window.open('https://www.linkedin.com/in/erhassankazi/', '_blank');
    };

    const openGithub = () => {
        window.open('https://github.com/ANDROIDHASSAN', '_blank'); 
    };

    const openWebsite = () => {
        window.open('https://hubertix.netlify.app/', '_blank'); 
    };

    const openPortfolio = () => {
        window.open('https://hassankazi3d.netlify.app/', '_blank'); 
    };


    return (
        <div className="flex justify-between items-center p-6 rounded-lg shadow-sm bg-white">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className='w-14 h-14 bg-red-900 rounded-full'></div>
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold text-gray-900">Hassan Kazi</h2>
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Good</span>
                    </div>
                    <p className="text-sm text-gray-500">Full Stack Developer</p>
                    <div className="flex gap-4 mt-2 text-sm text-gray-600 cursor-pointer">
                        <span className="flex items-center gap-1" onClick={openGithub}><FaGithub /> GitHub</span>
                        <span className="flex items-center gap-1" onClick={openLinkedin}><FaLinkedin /> LinkedIn</span>
                        <span className="flex items-center gap-1" onClick={openWebsite}><FaGlobe /> Website</span>
                        <span className="flex items-center gap-1" onClick={openPortfolio}><FaGoogleDrive /> Portfolio</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
