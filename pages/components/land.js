import React,{useRef,useEffect} from "react";
import styles from '../../styles/first.module.css';
import Image from "next/image";
import gsap from 'gsap/dist/gsap';
import { Power0 } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const Land =()=>{
    const animation = useRef();
    
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
        let t1=gsap.timeline({
            defaults:{duration:2,ease:Power0.easeInOut},
            scrollTrigger:{
                trigger:animation.current,
                start:"top top",
                end:"end end",
                
            },
        });
        t1.fromTo(
            animation.current,
            {x:100,opacity:0,duration:3},
            {x:0,opacity:1,duration:3,ease:Power0.easeInOut})
    },[]);
return (
<div className={styles.container}>
    <div className={styles.innercontainer}>
        <div className={styles.content}>
            <p>Limitless possibilities in one Window</p>
            <p>hp launches new hp spectre X360</p>
            <button className={styles.btn}>Explore</button>
        </div>
       <Image ref={animation} className={styles.img} src="./2.png" height={200} width={300} />

    </div>
    </div>
    );
};
export default Land;
