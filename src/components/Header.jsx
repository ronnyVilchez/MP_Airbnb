import React from 'react'

export const Header = ({ children }) => {
    return (
        <header className='inputs'>
            <img className='logo' src="src/assets/logo.svg" alt="logo" />
            {children}
        </header>
    )
}
