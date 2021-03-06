import img from '../assets/IMG_0109 (1).JPG';

const Home = () => {
  return (
    <div className="home">
      <img src={img} alt="" />
      <h1>Mohammad Zulfikri</h1>
      <p>My name is Mohammad Zulfikri, I am learning programming</p>
      <div>
          {/* <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-google"></a>
          <a href="#" class="fa fa-instagram"></a> */}
      </div>
    </div>
  )
}
export default Home;