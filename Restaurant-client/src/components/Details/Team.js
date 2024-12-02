import React from 'react';
import './Details.css'; // Import your CSS file

const Team = () => {
    const teamMembers = [
        {
            src: '/images/Chef_new.jpg',
            name: 'John Doe',
            role: 'Head Chef'
        },
        {
            src: '/images/fchef.jpg',
            name: 'Jane Smith',
            role: 'Assistant Chef'
        },
        {
            src: '/images/manager.jpg',
            name: 'Edward Harrinston',
            role: 'Restaurant Manager'
        }
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Meet Our Team</h2>
            <div className="row">
                {teamMembers.map((member, index) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                        <div className="card team-card">
                        <img src={member.src} className="team-card-img-top img-fluid" alt={member.name} />
                        <div className="card-body text-center">
                                <h5 className="card-title text-dark">{member.name}</h5>
                                <p className="card-text text-dark">{member.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
