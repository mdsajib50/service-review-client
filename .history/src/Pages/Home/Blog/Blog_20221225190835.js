import React from 'react';

const Blog = () => {
    return (
        <div> 
            <div className='w-1/2 m-0 mx-auto bg-slate-200 p-6'>
                <h1 className ='font-semibold text-lg'>Difference between SQL and NoSQL?</h1>
                <p>
                SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
                SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure.
                A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.
                </p>
            </div>
            <div className='w-1/2 m-0 mx-auto bg-slate-200 p-6'>
                <h1 className ='font-semibold text-lg'></h1>
                <p></p>
            </div>
        </div>
    );
};

export default Blog;