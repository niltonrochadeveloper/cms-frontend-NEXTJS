import Head  from "next/head";


export default function Meta(props: any) {

    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="Menu Portfólio" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/2116/2116861.png" />
        </Head>
    )
}