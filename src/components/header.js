import React from 'react';
export const Header = ({data})=> {
    return <mj-section>
        <mj-column>
            <mj-text>
                <H data={data}/>
           </mj-text>
        </mj-column>
    </mj-section>
}

export const H = ({data}) =>{
    switch (data.level){
        case 1:
            return <h1>{data.text}</h1>
        case 2:
            return <h2>{data.text}</h2>
        case 3:
            return <h3>{data.text}</h3>
        case 4:
            return <h3>{data.text}</h3>
    }
}