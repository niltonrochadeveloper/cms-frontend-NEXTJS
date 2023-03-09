
import Image from 'next/image'

import styles from '@/styles/Home.module.scss'
import Meta from '@/components/Meta'
import Menu from '@/components/navbar/menu'
import Github from '@/components/github/github'


import { useEffect, useState } from "react"


export default function Home() {

  const [ user, setUser ] = useState(false)
    

  useEffect(() => {


    const fetchUser = async () => {
        const response = await fetch('https://api.github.com/users/niltonrochadeveloper')

        const res = await response.json()

        if(!user) {
            // setTimeout(() => {
                setUser(res)
            // }, 1000)
        }
        
    }

    fetchUser()

}, [user])

  return (
    <>
      <Meta title={'Portfólio do Nilton Rocha'} />
      {!user && <section><article><div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>Carregando...</div></article></section>}
      {user && <div>
        <Menu user={user} />
        <div>
          <Github repo={''} />
        </div>
      </div>}
    </>
  )
}
