import React, {useRef,useEffect} from "react";
import Image from "next/image";
import styles from '../../styles/third.module.css';
import gsap from 'gsap/dist/gsap';
import { Power0 } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const Third = () =>{
    const animation = useRef();
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
        let t1=gsap.timeline({
            defaults:{duration:2,ease:Power0.easeInOut},
            scrollTrigger:{
                trigger:animation.current,
                start:"top top",
                end:"end end",
                
            }
        })
        t1.fromTo(
            animation.current,
            {y: -100,opacity:0,duration:3},
            {y: 0,opacity:1,duration:3,ease:Power0.easeInOut
    });
}, []);
    return (
        <div className={styles.container} id="third">
            <div className={styles.innercontainer}>
                <div className={styles.subdiv}>
                <div ref={animation}  className={styles.imagecontent}> 
                < Image className={styles.imgl} src="./img2.png" height={300} width={300}/></div>
                <div className={styles.content}>
                <Image  className={styles.img} src="./man-removebg-preview.png" height={200} width={300} />
                </div>
                </div>

             <div   className={styles.para}><p>"Hello World" is the first statement  taught to the system by every beginner programmer .</p></div>
            </div>
           
            
            </div>
            );
    }
export default Third;
