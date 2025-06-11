import React from 'react';

const Page = ({title, cards}) => {
    return (
        <div className='page-section'>
            <h2>{title}</h2>

        <div className="flex-wrap">
            {cards.map((text, index) => (
            <div key={index} className="card">
                <h3>{text.title}</h3>
                {text.details}
            </div>
            ))}
            </div>
        </div>
    )
}

export default Page;