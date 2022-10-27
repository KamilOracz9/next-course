export default function Mem({mem: {name, url}}) {
    return(
        <>
            <h1>{name}</h1>
            <img src={url} />
        </>
    );
}

export async function getServerSideProps(context) {
    const {id} = context.params;
    const response = await fetch('https://api.imgflip.com/get_memes');
    const {data, success} = await response.json();

    if(!success){
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const mem = data.memes.find(mem => mem.id === id);

    return {
        props: {
            mem,
        }
    }
}