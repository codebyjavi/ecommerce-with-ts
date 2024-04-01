function Hero() {
  return (
        <section className="max-w-5xl mx-auto gap-y-5 pt-20 md:pt-60 font-['hind']">
          <div className=" py-12 px-10 bg-[#FFF3E3] md:w-1/2 ml-auto flex flex-col font-semibold shadow-xl">
            <small>Nuevos productos</small>
            <h1 className="text-[#B88E2F] pt-1 text-5xl font-bold">Conocé nuestra nueva categoría de productos</h1>
            <small className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At est minima.</small>
            <a className="bg-[#B88E2F] text-white px-12 py-4 w-fit mt-12" href="#NuestrosProductos">Comprar!</a>
          </div>
        </section>
  )
}

export default Hero