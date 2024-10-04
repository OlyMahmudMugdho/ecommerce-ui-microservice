import Image from "next/image"
import shopingCart from "../../images/shopping-cart.png"

function HeroSection() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    src={shopingCart}
                    alt="shopping cart"
                    width={300}
                    height={300}
                    className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold">We want to make your wallet empty!</h1>
                    <p className="py-6">
                    Discover a world of convenience and endless possibilities as you explore our extensive collection of products. Whether you&apos;re searching for a electronic device, books, or something entirely unique, we&apos;ve got you covered.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection