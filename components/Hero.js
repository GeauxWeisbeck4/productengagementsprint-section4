import Image from 'next/image'

const Hero = () => {
  return (
    <div className="border border-gray-200 md:flex md:flex-row">
      <div className="bg-gray-100 text-center md:w-1/3">
        <Image
          className="mx-auto"
          src="/public/static/images/pesproject.jpg"
          alt="Product Engagement Sprint Picture"
          width={500}
          height={500}
        />
      </div>
      <div>
        <h2 className="self-center px-4 py-8 md:w-2/3 md:px-8">
          Welcome to my Prdoduct Engagement Sprint Blog
        </h2>
        <p></p>
      </div>
    </div>
  )
}

export default Hero
