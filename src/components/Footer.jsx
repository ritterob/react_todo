import React from 'react';

export default function Footer() {
    return (
        <footer className="text-center bg-dark p-4">
            <strong>&copy; {new Date().getFullYear()}</strong> &mdash; Rob Ritter
        </footer>
    )
}
