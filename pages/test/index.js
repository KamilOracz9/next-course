export default function Test ({tests}) {
    const listElements = tests.map(test => (
        <li key={test._id}>
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

export async function getServerSideProps() {
    let res = await fetch("http://127.0.0.1:3000/api/test", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let response = await res.json();
  
    return {
      props: {
        tests: response.data
      },
    };
  }
  