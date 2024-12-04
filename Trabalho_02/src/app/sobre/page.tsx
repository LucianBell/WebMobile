import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/esm/Container'
import Rock_Tabs from '@/components/rock_tabs'

export default function About() {
  return (
    <main className="bg-black text-white h-screen">

      <Container className="bg-gray-800 bg-cover bg-center p-4 min-w-full min-h-56 align-middle justify-center" style={{ backgroundImage: "url('/guitar.png')" }}>

        <Container className=' w-fit text-center'>
          <h2 className=' text-base uppercase tracking-wider italic'>The Rockstar Who Owns the Stage</h2>
          <h1 className=' text-7xl uppercase tracking-[0.7em] mt-4' style={{ fontFamily: "Cinzel Decorative" }}>Lucian Fernando Bellini</h1>
        </Container>

      </Container>

      <Container className='mt-6 text-center'>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className='text-3xl font-bold mb-4'>About Me</h3>
          <p className='text-lg'>
            🎸 Lucian Fernando Bellini - The man who walks into a room and immediately turns up the volume to 11! From the moment I picked up my first guitar at the age of 6, I knew I was destined to break all the rules, defy expectations, and make history. Whether it’s coding or creating electrifying music, I live for the thrill of creation and the roar of the crowd.
          </p>
          <p className='text-lg'>
            When I'm not blasting my latest playlist at maximum volume or rocking the stage with my unstoppable energy, I’m crafting digital experiences that hit just as hard. I bring the same passion, precision, and dedication to everything I do, whether it’s writing code or writing songs. 🎤🔥
          </p>
          <p className='text-lg'>
            If you're looking for someone to bring that same raw energy into the tech world, you found him. Let's make some noise together! 🎶🤘
          </p>
          <p className='text-lg mt-4'>
            📧 Email me: <a href="mailto:lucianbellini1@gmail.com" className="text-blue-400">lucianbellini1@gmail.com</a>
          </p>
        </div>
      </Container>

    </main>
  )
}
