import TopCont from '../mainPage/TopCont';
import MenuFunct from '../mainPage/MenuFunct';
import Footer from "../Footer/footer";


const WhyAmx = () =>{
    return(<div className='fullPage'>
            <div className='portada'>
                <div className='header'>
                <div className="headerInner">
                    <TopCont/>
                    <MenuFunct/>
                </div>
                </div>
            </div>
            <div className='supportMenu'></div>   
        <div className='whyAmxText'>
            <h2 className='whyAmxTextTitle'>
                Why choose AMX support?
            </h2>
        <div>
        <p><span>1</span>Expertise: Our passionate engineers and technicians possess a wealth of expertise in the maintenance and repair of Challenger and Global series
        aircraft, as well as Embraer Legacy models.</p>
        <p><span>2</span>Cutting-Edge Facilities: Within our state-of-the-art facility located in Vienna 
        Airport, we boast cutting-edge technology and tools, creating an environment conducive to precise and 
        efficient maintenance work.</p>
        <p><span>3</span>Timely and Efficient Service: Downtime is costly and inconvenient. Our streamlined 
        processes and efficient workflow in Vienna cater to both scheduled and unscheduled maintenance,
        ensuring your aircraft receives prompt attention and allowing you to get back in the air with
        minimal delay.</p>
        <p><span>4</span>Operating Hours: Our scheduled and unscheduled maintenance services in Vienna
        are available from Monday to Sunday, between 08:00 and 20:00. This commitment to extended hours
        reflects our dedication to accommodating your aircraft&rsquo;s needs at your convenience.
        <p><span>5</span>24/7 Urgent Support: We understand that urgent needs can arise at any time.
        AMX Support is reachable 24/7 to address any urgent issues promptly. Our commitment to round-the-clock
            availability ensures that your aircraft is supported whenever the need arises.</p>
        <p><span>6</span>Comprehensive Solutions: From routine inspections to intricate repairs and advanced system upgrades,
        AMX Support offers a comprehensive suite of services tailored to the specific needs of your aircraft, 
        ensuring longevity and peak performance.</p>
        <p><span>7</span>Customer-Centric Approach: Customer satisfaction is paramount at AMX Support. 
        We collaborate closely with aircraft owners and operators, understanding their unique requirements 
        and delivering personalized solutions that exceed expectations.</p>
        Transparent Quoting: At AMX Support, we believe in transparency. We are happy to provide a 
        quote at any time for your specific maintenance needs. Our detailed and competitive quotes ensure you
        have a clear understanding of the costs involved.</p>
        </div>
        </div>
        <Footer/>
    </div>)

}
export default WhyAmx