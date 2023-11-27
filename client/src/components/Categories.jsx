export default function TopSellers() {
    return (
        <section className="container py-5">
            <div className="row text-center pt-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Categories</h1>
                    <p>
                        Enjoy all crystals with different shapes, sizes and colors.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 p-5 mt-3">
                    <a href="#"><img src="./assets/img/crystal_5.webp" className="rounded-circle img-fluid border" /></a>
                    <h5 className="text-center mt-3 mb-3">Raw Gems</h5>
                    <p className="text-center"><a className="btn btn-success">See All</a></p>
                </div>
                <div className="col-12 col-md-4 p-5 mt-3">
                    <a href="#"><img src="./assets/img/crystal_7.jpg" className="rounded-circle img-fluid border" /></a>
                    <h2 className="h5 text-center mt-3 mb-3">Tumbled Gems</h2>
                    <p className="text-center"><a className="btn btn-success">See All</a></p>
                </div>
                <div className="col-12 col-md-4 p-5 mt-3">
                    <a href="#"><img src="./assets/img/crystal_6.jpg" className="rounded-circle img-fluid border" /></a>
                    <h2 className="h5 text-center mt-3 mb-3">Shaped gems</h2>
                    <p className="text-center"><a className="btn btn-success">See All</a></p>
                </div>
            </div>
        </section>
    )
}