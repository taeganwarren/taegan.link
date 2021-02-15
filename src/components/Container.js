import React from 'react';
import Link from './Link';

const Container = ({links}) => {
    return (
        <div className="container">
            {links.map((link) => (
                <Link key={link.id} slug={link.slug} link={link.link}/>
            ))}
        </div>
    )
}

export default Container
