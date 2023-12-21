import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import * as gemsService from '../../services/gemsService'
import PostsSneakPeak from "./posts-sneak-peak/PostsSneakPeak";

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    gemsService.getLatest()
      .then(setPosts)
  }, [])

  return (
    <>
      <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img style={{ maxWidth: '60%' }} className="img-fluid" src="./assets/img/crystal_3.webp" alt="" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1 text-success"><b>Gem</b> Posts</h1>
                    <h3 className="h2">Upload your own crytals</h3>
                    <p>
                      Make an appreciation post for your favorite crystal and let the others rate it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img style={{ maxWidth: '60%' }} className="img-fluid" src="./assets/img/crystal_8.png" alt="" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">Caregories</h1>
                    <h3 className="h2">Choose from multiple categories</h3>
                    <p>
                      Choose the category that best suits your unique crystal and share it with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img style={{ maxWidth: '60%' }} className="img-fluid card-img" src="./assets/img/crystal_4.png" alt="" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">Favorites</h1>
                    <h3 className="h2">Add crystals to favorites</h3>
                    <p>
                      You can add all your favorite crystal posts in one place and check them quickly when needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
          <i className="fas fa-chevron-left"></i>
        </a>
        <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Categories</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 p-5 mt-3">
            <Link to="/gems/raw-gems"><img src="./assets/img/crystal_5.webp" className="rounded-circle img-fluid border" /></Link>
            <h5 className="text-center mt-3 mb-3">Raw Gems</h5>
            <p className="text-center"><Link to="/gems/raw-gems" className="btn btn-success">See All</Link></p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <Link to="/gems/tumbled-gems"><img src="./assets/img/crystal_7.jpg" className="rounded-circle img-fluid border" /></Link>
            <h2 className="h5 text-center mt-3 mb-3">Tumbled Gems</h2>
            <p className="text-center"><Link to="/gems/tumbled-gems" className="btn btn-success">See All</Link></p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <Link to="/gems/shaped-gems"><img src="./assets/img/crystal_6.jpg" className="rounded-circle img-fluid border" /></Link>
            <h2 className="h5 text-center mt-3 mb-3">Shaped gems</h2>
            <p className="text-center"><Link to="/gems/shaped-gems" className="btn btn-success">See All</Link></p>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Sneak Peak Posts</h1>
              <p>
                Get a sneak peak of our posts! You can register for even more posts and details! 
              </p>
            </div>
          </div>
          <div className="row">
              {posts.map(post => <PostsSneakPeak key={post._id} {...post} />)}

              {!posts.length && <p>No gem posts yet</p>}
            </div>
          </div>
      </section>
    </>

  )
}