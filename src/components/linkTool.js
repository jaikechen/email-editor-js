import React from 'react';
import {
    Mjml,
    MjmlHead,
    MjmlTitle,
    MjmlPreview,
    MjmlBody,
    MjmlSection,
    MjmlColumn,
    MjmlButton,
    MjmlImage,
    MjmlStyle,
    MjmlText
} from 'mjml-react';
export const LinkTool = ({data})=> {
    return  <mj-section>
            <mj-column>
                <mj-image width="137px" height="185px" padding="0" src={data.meta.image.url} />
                <mj-text align="center">
                    <h2><a href={data.link}>{data.meta.title}</a></h2>
                    <p>{data.meta.description}</p>
                </mj-text>
            </mj-column>
    </mj-section>
}