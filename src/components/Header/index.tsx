/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

import { FiLogOut } from 'react-icons/fi'

import { AuthContext, signOut } from '../../contexts/AuthContext'

export function Header(){
    const {user} = useContext(AuthContext)
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link legacyBehavior href="/dashboard">
                  <img src="logo.svg" width={190} height={60} alt={''}/>
                </Link>

                <nav className={styles.menuNav}>
                    <Link legacyBehavior href="/category">
                    <a>Categoria</a>
                    </Link>

                    <Link legacyBehavior href="/product" >
                    <a>Cardapio</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color="#FFF" size={24}/>
                    </button>
                </nav>
            </div>
           
        </header>
    )
}