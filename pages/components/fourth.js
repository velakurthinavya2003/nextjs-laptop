import React from "react";
import styles from '../../styles/fourth.module.css';
import Image from "next/image";
const Fourth =()=>{
return (
<div className={styles.container}>
    <div className={styles.innercontainer}>
        <div className={styles.content}>
            <p>Rotate 360 degrees </p>
            <p>Easy to handle</p>
          
        </div>
       <Image className={styles.img} src="/img2-removebg-preview.png" height={200} width={300} />

    </div>
    </div>
    );
};
export default Fourth;