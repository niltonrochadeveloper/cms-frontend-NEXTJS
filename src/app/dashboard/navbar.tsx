import Image from "next/image"

export default function Navbar() {

    return (
        <nav style={{height: '70px'}}>
            <div style={{height: '100%', display: 'flex', justifyContent: 'space-between', margin: '0 2rem', alignItems: 'center'}}>
                <Image src="" alt="teste" />
                <ul style={{display: 'flex'}}>
                    <li>Home</li>
                    <li>Dashboard</li>
                    <li>Analytics</li>
                    <li>Setting</li>
                </ul>
            </div>
        </nav>
    )
}