import React, {Component} from 'react'
import Banner from './Banner'
import Signup from './Signup'

class Home extends Component{
  constructor(props){
      super(props);
      this.state={
        modalIsOpen: false,
      };
}
  render(){
    return(
      <div>
      <div className = "home-image"><img src="/desktop image@3x.png" alt="placeholder" /></div>

      <div className="home-text">
      <h2>Saturn V</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas modi laudantium, reprehenderit nostrum tenetur incidunt dolore quisquam ut voluptatibus provident quos accusantium, mollitia dolorum similique animi. Odio dicta, eligendi in.
      <br/>
      <br/>
      Cumque omnis, at facere consectetur incidunt quis iste, a porro. Ab adipisci beatae odit repellendus tenetur mollitia, recusandae similique eligendi numquam velit rem aliquam quos qui, totam architecto, id laudantium.
      <br/>
      <br/>

      Quisquam, magnam ratione? Debitis quisquam sunt adipisci, aliquam suscipit nemo quam delectus? Tenetur qui, excepturi nemo cupiditate eaque quae sed placeat ex rerum, ea soluta ipsam minima nostrum. Unde, similique?
      <br/>
      <br/>
      Vero enim aliquam, soluta omnis est eaque nemo. Eos eveniet pariatur, nemo ab est quia rerum inventore fugiat, quasi ullam quam, error quo reiciendis aut? Voluptas, sequi, recusandae. Itaque, quod!</p>
      <br/>
      </div>
      <div className = "home-image"><img src="/mars.jpg" alt="placeholder"/></div>
      <div className="home-text">
      <h2>Mars Voyager</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas modi laudantium, reprehenderit nostrum tenetur incidunt dolore quisquam ut voluptatibus provident quos accusantium, mollitia dolorum similique animi. Odio dicta, eligendi in.
      <br/>
      <br/>
      Cumque omnis, at facere consectetur incidunt quis iste, a porro. Ab adipisci beatae odit repellendus tenetur mollitia, recusandae similique eligendi numquam velit rem aliquam quos qui, totam architecto, id laudantium.
      <br/>
      <br/>

      Quisquam, magnam ratione? Debitis quisquam sunt adipisci, aliquam suscipit nemo quam delectus? Tenetur qui, excepturi nemo cupiditate eaque quae sed placeat ex rerum, ea soluta ipsam minima nostrum. Unde, similique?
      <br/>
      <br/>
      Vero enim aliquam, soluta omnis est eaque nemo. Eos eveniet pariatur, nemo ab est quia rerum inventore fugiat, quasi ullam quam, error quo reiciendis aut? Voluptas, sequi, recusandae. Itaque, quod!</p>
      </div>

      <div className = "home-image"><img src="/uranus.jpg" alt="placeholder"/></div>


      <div className="home-text">
      <h2>Up to Uranus</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas modi laudantium, reprehenderit nostrum tenetur incidunt dolore quisquam ut voluptatibus provident quos accusantium, mollitia dolorum similique animi. Odio dicta, eligendi in.
      <br/>
      <br/>
      Cumque omnis, at facere consectetur incidunt quis iste, a porro. Ab adipisci beatae odit repellendus tenetur mollitia, recusandae similique eligendi numquam velit rem aliquam quos qui, totam architecto, id laudantium.
      <br/>
      <br/>

      Quisquam, magnam ratione? Debitis quisquam sunt adipisci, aliquam suscipit nemo quam delectus? Tenetur qui, excepturi nemo cupiditate eaque quae sed placeat ex rerum, ea soluta ipsam minima nostrum. Unde, similique?
      <br/>
      <br/>
      Vero enim aliquam, soluta omnis est eaque nemo. Eos eveniet pariatur, nemo ab est quia rerum inventore fugiat, quasi ullam quam, error quo reiciendis aut? Voluptas, sequi, recusandae. Itaque, quod!</p>
      <br/>
      </div>
      <Banner isHide={this.props.isHide} />
      </div>


    )
  }
}






export default Home
