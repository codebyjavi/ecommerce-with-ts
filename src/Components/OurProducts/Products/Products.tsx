import { bagItem } from "../../../types";

type ProductsProps = {
    data: bagItem[]
    addToBag: (item: bagItem) => void
}

function Products({data, addToBag} : ProductsProps) {
    return (
        <div className='max-w-5xl mx-auto flex flex-wrap gap-y-20 gap-x-5 my-10'>

            {data.map((product) =>
                <div key={product.id} className="mx-auto md:mx-0 w-72 h-96 pb-2 shadow-lg flex flex-col justify-between">
                    <div className="my-auto px-2 ">
                        <img src={product.image} className="bg-cover  max-h-[200px] bg-center mx-auto bg-white"/>
                    </div>
                    <div className="h-1/2 flex flex-col justify-between py-1 px-2">
                        <span className="pt-10">{product.title}</span>
                        <div className='flex items-center justify-between font-semibold'>
                          <span className='text-3xl'>$ {product.price}</span>
                          <i className='bx bx-cart-add cursor-pointer p-1 rounded hover:bg-neutral-200 text-4xl'
                          onClick={() => addToBag(product)}
                          ></i>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Products;
