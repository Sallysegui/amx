
import { HashLink} from 'react-router-hash-link';
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
// import AogResponse from '../Services/AOGresponse';
// import LineMaintenace from '../Services/lineMaintenace';
// import BaseMaintenace from '../Services/baseMaintenace';
// import EngineBoroscope from '../Services/engineBoroscope';
import Services from '../Services/services';

const Test = () => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 80px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
// const customAnimationImg = keyframes`
//   from {
//     opacity: 0;
//     transform: translate(0, 80px);
//   }

//   to {
//     opacity: 1;
//     transform: translate(0, 0);
//   }
// `;
    return(<div>
  <div id="section-1">
  <Reveal keyframes={customAnimation} delay={200}>
    <h2 >Section 1</h2>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    ths standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee
      n thes standard dummy text ever since the 1500s, when an unknown printer took a galley of type 

      and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
      the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
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
    <br></br>
    
    </Reveal>
    </div>
    {/* <AogResponse/>
          */}
        <Services/>
            

<div id="section-2"> 
  <Reveal keyframes={customAnimation} delay={200} >
  <h2 >Section 2</h2>
    <p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    ths standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee
      n thes standard dummy text ever since the 1500s, when an unknown printer took a galley of type 

      and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
      the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
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
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    ths standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee
      n thes standard dummy text ever since the 1500s, when an unknown printer took a galley of type 

      and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
      the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
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
    <br></br>
    </Reveal>
</div>
{/* <LineMaintenace/> */}
<div id="section-3">
<Reveal keyframes={customAnimation} delay={200} >
<h2 >Section 3</h2>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
has been ths standard dummy text ever since the 1500s, when an unknown printer took a galley of t
ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also
 the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publ
 ishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact tha
 t a reader will be distracted by the readable content of a page when looking at its layout. The point of
  using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
   ontent here, content making it look like readable English.


   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
has been ths standard dummy text ever since the 1500s, when an unknown printer took a galley of t
ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also
 the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publ
 ishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact tha
 t a reader will be distracted by the readable content of a page when looking at its layout. The point of
  using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
   ontent here, content making it look like readable English.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
has been ths standard dummy text ever since the 1500s, when an unknown printer took a galley of t
ype and scrambled it to make a type specimen book. It has survived not only five centuries, but also
 the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publ
 ishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact tha
 t a reader will be distracted by the readable content of a page when looking at its layout. The point of
  using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
   ontent here, content making it look like readable English.
     </p>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </Reveal>
</div>
{/* <BaseMaintenace/> */}
           
<div id="section-4">
<Reveal keyframes={customAnimation} >
<h2 >Section 4</h2>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    ths standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee
      n thes standard dummy text ever since the 1500s, when an unknown printer took a galley of type 

      and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
      the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
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
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    ths standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
     scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
     leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960
     s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long establishe
      d fact that a reader will be distracted by the readable content of a page when looking at its layout.
       The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
       as opposed 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee
      n thes standard dummy text ever since the 1500s, when an unknown printer took a galley of type 

      and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
      the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
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
    <p>    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    ths standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee
      n thes standard dummy text ever since the 1500s, when an unknown printer took a galley of type 

      and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
      the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
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
    </Reveal>
    </div>
    {/* <EngineBoroscope/> */}
    <HashLink smooth  to="/test#section-1"  >About us 1</HashLink ><br />
    <HashLink smooth  to="/test#section-2"  >About us 2</HashLink ><br />
    <HashLink smooth  to="/test#section-3"  >About us 3</HashLink ><br />
    <HashLink smooth  to="/test#section-4"  >About us 4</HashLink ><br />


    <br></br>
    <br></br>
       <li>  <HashLink smooth  to="/test#aogres"  >AOG Response</HashLink ></li>
              <li>  <HashLink  to="/test#lineMainte" smooth >Line Maintenance</HashLink ></li>        
              <li>  <HashLink  to="/test#baseMainte" smooth >Base Maintenance</HashLink ></li>
              <li>  <HashLink  smooth  to="/test#boroscope">Engine Borescope</HashLink ></li>

              <br></br>
    <br></br>
    <br></br>
    
    </div>
)}

export default Test