import { HashLink} from 'react-router-hash-link';

const Careers = () =>{
    return(<div className='careersConainer'>
    {/* <a href="/test#section-1" >Jump to section 1</a><br /> */}
    <br />
    <HashLink smooth  to="/test#section-1"  >About us 1</HashLink ><br />
    <HashLink smooth  to="/test#section-2"  >About us 2</HashLink ><br />
    <HashLink smooth  to="/test#section-3"  >About us 3</HashLink ><br />
    <HashLink smooth  to="/test#section-4"  >About us 4</HashLink ><br />
    <p></p>
    <li>  <HashLink smooth  to="/test#aogres"  >AOG Response</HashLink ></li>
              <li>  <HashLink  to="/test#lineMainte" smooth >Line Maintenance</HashLink ></li>        
              <li>  <HashLink  to="/test#baseMainte" smooth >Base Maintenance</HashLink ></li>
              <li>  <HashLink  smooth  to="/test#boroscope">Engine Borescope</HashLink ></li>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2 id="section-1">Section 1</h2>
    <p>
    nic typesetting, remaining essentially unchanged. It was popularised in the 
      1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
      desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long 
      established fact that a reader will be distracted by the readable content of a page when looking 
      at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution o
      f letters, as opposed , content making it look like readable English.
        Lormaking it look like readable English.
        Lor
        Lorem Ipsum is simply dummy text
        standard dummy text ever since the 1500s, when an unknown prin
        ter took a galley of type and scrambled it to make a type specimen book. It ha
        s survived not only five centuries, but also the leap into electronic typesetting, r
        emaining essentially unchanged. It was popularised in the 1960s with the release of Letras
        et sheets containing Lorem Ipsum passages, and more recently with desktop publishing software li
        ke Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader 
        will be distracted by the readable content of a page when looking at its layout. The point of using L
        orem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usin
        ent here, conte
        ng it look like readable English.
        Lor
    </p>
    <br></br>
    <br></br>
    <br></br>
       <li>  <HashLink smooth  to="/test#aogres"  >AOG Response</HashLink ></li>
              <li>  <HashLink  to="/test#lineMainte" smooth >Line Maintenance</HashLink ></li>        
              <li>  <HashLink  to="/test#baseMainte" smooth >Base Maintenance</HashLink ></li>
              <li>  <HashLink  smooth  to="/test#boroscope">Engine Borescope</HashLink ></li>

              <br></br>
    <br></br>
    <br></br>


    </div>)

}
export default Careers