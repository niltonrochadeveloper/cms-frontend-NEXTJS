import Image from "next/image"

import styles from "@/styles/Menu.module.scss"
import { useEffect, useState } from "react"

export default function Menu(props: any) {

    const isLoading = !!props.user

    return (
        <nav id={`${styles.nav}`}>
            <div className={`${styles.container}`}>
                <div className={`${styles.content}`}>
                    <Image src={'https://cdn-icons-png.flaticon.com/512/2116/2116861.png'} width={25} height={25} alt={'logo'} />Meu Portfólio
                </div>
                <div className={`${styles.boxImage}`}>
                    {isLoading && <Image src={props.user.avatar_url} width={60} height={60} alt={'foto de perfil'} />}
                    <div>
                    {isLoading && <h2>{props.user.name}</h2>}
                    </div>
                </div>
                <div className={`${styles.list}`}>
                    <ul>
                        <li>Home</li>
                        <li>Portfólio</li>
                        <li>Contato</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}