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
import {Header} from "./components/header";
import {Paragraph} from "./components/paragraph";
import {LinkTool} from "./components/linkTool";
export const generate = (data) => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Last Minute Offer</MjmlTitle>
        <MjmlPreview>Last Minute Offer...</MjmlPreview>
      </MjmlHead>
      <MjmlBody width={600}>
        {data.blocks.map(block => <Block block={block}/>)}
      </MjmlBody>
    </Mjml>
  );
};

export const Block =({block})=>{
  switch (block.type){
    case 'header': return <Header data={block.data}/>
    case 'paragraph': return <Paragraph data={block.data}/>
    case 'linkTool': return <LinkTool data={block.data}/>
  }
  return <></>
}