import React from 'react'

export const Header = ({ children }) => {
    return (
        <header className='inputs'>
            <img className='logo' src="/images/logo.svg" alt="logo" />
            {children}
        </header>
    )
}
