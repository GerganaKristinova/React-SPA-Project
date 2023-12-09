export default function PostsSneakPeak(post) {
    return (
        <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src={post.imageUrl} />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    </div>
                </div>
                <div className="card-body">
                    <p className="text-center mb-0 heading">{post.crystal}</p>
                    <p className="text-center mb-0"><span>Energy:</span> {post.energy}</p>
                    <p className="text-center mb-0"><span>Specifics:</span> {post.specifics}</p>
                    <p className="text-center mb-0"><span>Zodiac sign:</span> {post.zodiac}</p>
                </div>
            </div>
        </div>
    )
}