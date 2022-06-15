import React from 'react';
export const Paragraph = ({data})=> {
    return <mj-section>
        <mj-column>
            <mj-text>
                {data.text}
           </mj-text>
        </mj-column>
    </mj-section>
}