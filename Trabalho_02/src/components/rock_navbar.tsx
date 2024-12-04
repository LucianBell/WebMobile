'use client'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'

export default function Rock_Navbar() {
    return (
        <Navbar className='px-3 bg-black border-b-2 border-white'>
        <Container>
          <Navbar.Brand href="/" className='text-white'>
            <img src="/logo.jpg" width="45" height="45" className='d-inline-block align-middle rounded-circle mx-2' alt="Logo" />
            {' '}
            Rock Center
          </Navbar.Brand>
        </Container>
        <Container className='justify-content-end text-white'>
          <Nav.Link href="/bands" className='hover:text-red-600 transition duration-200 uppercase'>Bands</Nav.Link>
          <Nav.Link href="/rockstars" className='mx-3 hover:text-red-600 transition duration-200 uppercase'>Rockstars</Nav.Link>
          <Nav.Link href="/add" className=' mr-4 hover:text-red-600 transition duration-200 uppercase'>Add Info</Nav.Link>
          <Nav.Link href="/doggo" className='mr-4 hover:text-red-600 transition duration-200 uppercase'>Doggo</Nav.Link>
          <Nav.Link href="/sobre" className='hover:text-red-600 transition duration-200 uppercase'>Sobre Mim</Nav.Link>
          <Nav.Link href="/login" className='ml-4 bg-red-600 p-2 rounded hover:scale-110 transition duration-200'>LOGIN 🤘</Nav.Link>
        </Container>
      </Navbar>
    )
}
