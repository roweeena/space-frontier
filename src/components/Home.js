import React, {Component} from 'react'
import Banner from './Banner'


class Home extends Component{
  render(){
    return(
      <div>
      <div className = "home-image"><img src="/desktop image@3x.png" alt="placeholder" /></div>
      <div className="home-text">
      <h2>Saturn V</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas modi laudantium, reprehenderit nostrum tenetur incidunt dolore quisquam ut voluptatibus provident quos accusantium, mollitia dolorum similique animi. Odio dicta, eligendi in.</p>
      <p>Cumque omnis, at facere consectetur incidunt quis iste, a porro. Ab adipisci beatae odit repellendus tenetur mollitia, recusandae similique eligendi numquam velit rem aliquam quos qui, totam architecto, id laudantium.</p>
      <p>Quisquam, magnam ratione? Debitis quisquam sunt adipisci, aliquam suscipit nemo quam delectus? Tenetur qui, excepturi nemo cupiditate eaque quae sed placeat ex rerum, ea soluta ipsam minima nostrum. Unde, similique?</p>
      <p>Vero enim aliquam, soluta omnis est eaque nemo. Eos eveniet pariatur, nemo ab est quia rerum inventore fugiat, quasi ullam quam, error quo reiciendis aut? Voluptas, sequi, recusandae. Itaque, quod!</p>
      </div>
      <div className = "home-image"><img src="https://picsum.photos/900/200" alt="placeholder"/></div>
      <div className="home-text">
      <h2>Mars Voyager</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas modi laudantium, reprehenderit nostrum tenetur incidunt dolore quisquam ut voluptatibus provident quos accusantium, mollitia dolorum similique animi. Odio dicta, eligendi in.</p>
      <p>Cumque omnis, at facere consectetur incidunt quis iste, a porro. Ab adipisci beatae odit repellendus tenetur mollitia, recusandae similique eligendi numquam velit rem aliquam quos qui, totam architecto, id laudantium.</p>
      <p>Quisquam, magnam ratione? Debitis quisquam sunt adipisci, aliquam suscipit nemo quam delectus? Tenetur qui, excepturi nemo cupiditate eaque quae sed placeat ex rerum, ea soluta ipsam minima nostrum. Unde, similique?</p>
      <p>Vero enim aliquam, soluta omnis est eaque nemo. Eos eveniet pariatur, nemo ab est quia rerum inventore fugiat, quasi ullam quam, error quo reiciendis aut? Voluptas, sequi, recusandae. Itaque, quod!</p>
      </div>
      <Banner isHide={this.props.isHide}/>
      <div className = "home-image"><img src="https://picsum.photos/900/200" alt="placeholder"/></div>
      <div className="home-text">
      <h2>Up to Uranus</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas modi laudantium, reprehenderit nostrum tenetur incidunt dolore quisquam ut voluptatibus provident quos accusantium, mollitia dolorum similique animi. Odio dicta, eligendi in.</p>
      <p>Cumque omnis, at facere consectetur incidunt quis iste, a porro. Ab adipisci beatae odit repellendus tenetur mollitia, recusandae similique eligendi numquam velit rem aliquam quos qui, totam architecto, id laudantium.</p>
      <p>Quisquam, magnam ratione? Debitis quisquam sunt adipisci, aliquam suscipit nemo quam delectus? Tenetur qui, excepturi nemo cupiditate eaque quae sed placeat ex rerum, ea soluta ipsam minima nostrum. Unde, similique?</p>
      <p>Vero enim aliquam, soluta omnis est eaque nemo. Eos eveniet pariatur, nemo ab est quia rerum inventore fugiat, quasi ullam quam, error quo reiciendis aut? Voluptas, sequi, recusandae. Itaque, quod!</p>
      </div>

      </div>


    )
  }
}






export default Home
