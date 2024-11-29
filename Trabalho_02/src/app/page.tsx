import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/esm/Container'
import Rock_Tabs from '@/components/rock_tabs'
// px-32 py-10
export default function Home() {
  return (
    <main className="bg-black text-white h-screen">
      
      <Container className="bg-gray-800 bg-cover bg-center p-4 min-w-full min-h-56 align-middle justify-center " style={{backgroundImage: "url('/guitar.png')"}}>

        <Container className=' w-fit text-center'>
          <h2 className=' text-base uppercase tracking-wider italic'>The tune will come to you at last</h2>
          <h1 className=' text-7xl uppercase tracking-[0.7em] mt-4' style={{ fontFamily: "Cinzel Decorative" }}>Rock Center</h1>
        </Container>

      </Container>

      <Container className=' mt-6'>
        <Rock_Tabs></Rock_Tabs>
      </Container>
    </main>
  )
}
