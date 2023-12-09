import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className='home' id="home">
        <main>
          <h1>React</h1>
          <p>Projects</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque soluta, ipsam delectus doloremque labore eius voluptates vero fugit corrupti? Cum eum consectetur distinctio? Amet repellat ipsa vero nostrum beatae modi aut quaerat omnis animi.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>

          <h1> Who We Are?</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem deleniti sunt et velit esse qui, accusamus
            repudiandae totam saepe tempore voluptates magni dicta. Odit ratione aliquam sit quaerat nihil excepturi rerum
            enim sed, laborum itaque iure deleniti placeat perferendis, sunt natus fuga ad nesciunt fugiat, dignissimos corrupti
            . Debitis eos earum dolorum et fugiat aliquid porro possimus incidunt doloribus id qui, impedit molestiae quam ipsum voluptatum numquam ullam officiis minus accusantium cumque architecto velit? Praesentium, n
            obis est aliquam veritatis quae beatae. Ducimus porro dignissimos suscipit animi nam adipisci, magni beatae quos
            eveniet vitae alias deserunt repellat voluptatum possimus recusandae maiores quae!</p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            
          <div style={{
              animationDelay:"0.3s", 
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{
              animationDelay:"0.5s", 
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay:"0.7s", 
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{
              animationDelay:" 1s", 
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>

      </div>


    </>
  )
}

export default Home
