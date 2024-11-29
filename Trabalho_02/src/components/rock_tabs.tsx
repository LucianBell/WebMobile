'use client'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Rock_Tabs() {
    return(
        <Tabs
        defaultActiveKey="who"
        id="fill-tab-example"
        className="mb-3"
        fill
        >
        <Tab eventKey="who" title={<span className="text-red-600 text-xl">Who we are</span>}>
          We're the keepers of the rock flame. From legendary bands to solo stars who made music history, we're here to bring their stories to life. <br /><br />
          Think of us as the roadies for rock knowledge — you bring the curiosity, we bring the tunes (minus the backstage pass). So, whether you're a veteran rocker or just curious, welcome to the journey!
        </Tab>
        <Tab eventKey="what" title={<span className="text-red-600 text-xl">What you find here</span>}>
        This is more than just a site; it’s a rock vault. You’ll uncover profiles, rare facts, and stories that keep rock 'n' roll alive and well. <br /><br />
        And don’t worry, you won’t find any 'Highway to Hell' here — just a highway to the legends who paved the way for the music you love.
        </Tab>
        <Tab eventKey="contribute" title={<span className="text-red-600 text-xl">Contribute</span>}>
        We know the best music has always been a collaborative effort, so why not join us? Got stories, photos, or insights into the rock world? Share them here! <br /><br />
        Think of it like jamming with fellow rock enthusiasts. As the song goes, we 'get by with a little help from our friends.<br /><br />
        And hey, if you want to help us even more, listen to our Spotify Playlist!
        <br/>
        <br/>

        <div style={{ borderRadius: "12px", overflow: "hidden"}}>
          <iframe
            src="https://open.spotify.com/embed/playlist/2985wPED8MlhcaXYMiqfjG?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>        
        </Tab>
        <Tab eventKey="contact" title={<span className="text-red-600 text-xl">Contact</span>}>
          Wanna say hello? Well the house is a rockin' don't bother knockin! <br /><br />
          You won't find us in any Hotel California, but you can bring your guitar and amp. to the nearest crossroad and play some blues. Our satanic associate will come running to fullfil your needs.
          </Tab>
        </Tabs>
    )
}
