import React from 'react';

const Link = ({slug, link}) => {
    const short_link = 'https://taegan.link' + slug
    return (
        <div className="link-box">
            <h3><a href={short_link}>{slug}</a></h3>
            <p><a href={link}>{link}</a></p>
        </div>
    )
}

export default Link
