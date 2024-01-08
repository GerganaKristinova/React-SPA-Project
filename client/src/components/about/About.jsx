import { useScrollTo } from '../../hooks/useScrollTo'

export default function About() {
    useScrollTo(0,0)

    return (
        <>
            <section className="bg-success py-5">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-md-8 text-white">
                            <h1>About Us</h1>
                            <p>
                                Hey, I'm Violet - the crystal enthusiast who started Gem Posts. Today we provide hundreds of thousands of healing crystals around the world to happy homes. Each working their magic to inspire and provide support for our wonderful customers.
                                As you hop on this transformational journey with us, get ready to soak in the enchantment of Gem Posts. Our handpicked gems are like mini powerhouses of positivity.
                                They'll help you balance your energy, tap into your intuition, and feel amazing. Crystals aren't just pretty - they're symbols of change and progress. When you choose the right crystal, it's like you're inviting its unique energy into your life.
                                That energy can help balance your emotions, calm your mind, and even boost your overall well-being. They can help inspire you and give you the courage and insights to take the next step in your journey just like in my own story.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid" src="assets/img/person_1.webp" alt="About Hero" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}