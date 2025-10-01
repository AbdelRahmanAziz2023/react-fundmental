import { useState } from "react";
import './content.css'

export default function Content(){

    let [tabContent, setTabContent] = useState('Components');
    let [activeTab, setActiveTab] = useState('Components');

    function handleClick(tab){
        setTabContent(tab);
        setActiveTab(tab);
    }

    let tabContentData = [
        {
            title: 'Components',
            content: 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.'
        },
        {
            title: 'JSX',
            content: 'JSX is a syntax extension to JavaScript. It is used with React to describe what the UI should look like. By using JSX, you can write HTML structures in the same file as JavaScript code. This makes it easier to understand and debug your code.'
        },
        {
            title: 'Props',
            content: 'Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation, similar to function parameters. Props are used to pass data and event handlers down to child components.'
        },
        {
            title: 'State',
            content: 'State is a built-in object that allows components to create and manage their own data. State is mutable, meaning it can be changed over time, usually in response to user actions or network responses. When state changes, the component re-renders to reflect the new state.'
        },
        {
            title: 'Hooks',
            content: 'Hooks are special functions that let you "hook into" React features. For example, useState is a Hook that lets you add state to functional components. Hooks allow you to use state and other React features without writing a class.'
        }
    ]

    return(
        <div className="content-container">
            <h2 className="headline">
                Main React Concepts
            </h2>
            <div className="tab">
                {tabContentData.map((item,index)=>(
                    <button
                        key={index}
                        onClick={()=>handleClick(item.title)}
                        className={activeTab===item.title?'active':undefined}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            <div className="content">
                <p>{tabContentData.find(item=>item.title===tabContent)?.content}</p>
            </div>
        </div>
    );
}

