import { useState, useEffect } from 'react'

export default function Test ({tests}) {
    const listElements = tests.map(test => (
        <li key={test.id}>
            {test.text}
        </li>
    ))

    return (
        <>
            <h1>Test</h1>
            <ul>
                {listElements}
            </ul>
        </>
    );
}

export const getServerSideProps = async () => {
    const response = await fetch('http://127.0.0.1:3000/api/test');
    const {success, data} = await response.json();

    if (!success) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const { tests } = data;

    return {
        props: {
            tests
        },
    }
}