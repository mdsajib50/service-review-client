import React from 'react';

const Blog = () => {
    return (
        <div> 
            <div className='w-1/2 m-0 mx-auto bg-slate-200 p-6 mt-2'>
                <h1 className ='font-semibold text-lg'>Difference between SQL and NoSQL?</h1>
                <p>
                SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
                SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure.
                A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.
                </p>
            </div>
            <div className='w-1/2 m-0 mx-auto bg-slate-200 p-6 mt-2'>
                <h1 className ='font-semibold text-lg'>What is JWT, and how does it work?</h1>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
            </div>
            <div className='w-1/2 m-0 mx-auto bg-slate-200 p-6 mt-2'>
                <h1 className ='font-semibold text-lg'>What is the difference between javascript and NodeJS?</h1>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className='w-1/2 m-0 mx-auto bg-slate-200 p-6 my-2'>
                <h1 className ='font-semibold text-lg'>How does NodeJS handle multiple requests at the same time?</h1>
                <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;