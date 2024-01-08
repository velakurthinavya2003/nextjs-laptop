import React, {useRef,useEffect} from "react";
import Image from "next/image";
import styles from '../../styles/second.module.css';
import gsap from 'gsap/dist/gsap';
import { Power0 } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const Second = () =>{
    const animation = useRef();
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
        let t1=gsap.timeline({
            defaults:{duration:3,ease:Power0.easeInOut},
            scrollTrigger:{
                trigger:animation.current,
                start:"top top",
                end:"end end",
                
            }
        });
        t1.fromTo(
            animation.current,
            {x: -100,opacity:0,duration:3},
            {x:0,opacity:1,duration:3,ease:Power0.easeInOut})
    },[]);
    return (
        <div className={styles.container} >
            <div className={styles.innercontainer}>
            <Image  ref={animation} className={styles.img} src="./img3.png" height={200} width={300} />
            
                <div className={styles.content}>
                    <p>i7 Core Processor</p>
                    <p>Display 13.7 inch</p>
                    <p>Intel Integrated Graphics</p>
                   
                   
            </div>
              
        
            </div>
            </div>
            );
};
export default Second;
