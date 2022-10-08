import React from 'react';
import camilleImage from '../../assets/profile.jpg'

function About (){
    return(
        <section>
            
            <h1>Allow Me to Introduce Myself...</h1>
            <img src={camilleImage} className='my-2' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima iste optio qui commodi dolorum
            ducimus aliquid placeat eaque maiores, itaque ullam laboriosam corrupti. Sed pariatur unde deleniti
            veritatis quibusdam?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quos illo quasi ipsam, rerum modi recusandae
            nesciunt impedit earum iusto explicabo. Doloribus officia similique recusandae laboriosam, quis enim omnis
            aperiam!</p>
            
        </section>
    );

}

export default About;