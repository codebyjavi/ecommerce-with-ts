import { bagItem } from "../../types";
import SearchInput from "./SearchInput";


type HeaderProps = {
 bag: bagItem[]
 removeFromBag: (id: bagItem['id']) => void
 increaseQuantity: (id: bagItem['id']) => void
 decreaseQuantity: (id: bagItem['id']) => void
 clearBag: () => void
 isEmpty: boolean
 bagTotal: number
}

function Header({bag, removeFromBag, increaseQuantity, 
  decreaseQuantity, clearBag, isEmpty, bagTotal} : HeaderProps) {


  return (
    <div className="bg-white/95 w-full top-0 sticky">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-2 md-px-0">
        <span className="text-2xl font-bold">Javi<span className="text-blue-500">Shop</span></span>
        
        <SearchInput />
        
        <div className="flex items-center relative cursor-pointer group">

          <i className='bx bx-shopping-bag text-4xl'></i>

          <div className="absolute top-8 -left-64 lg:-left-80 z-10 hidden group-hover:block bg-neutral-100 rounded-lg max-h-[500px] shadow-lg lg:max-h-[700px] overflow-y-auto">

          {isEmpty ? 

          (<div className="flex items-center text-center font-semibold text-xl">
              <h3 className="w-64 lg:w-96 h-20 pt-6">Tu bolsa está vacía  
                <i className='bx bx-confused'></i>
              </h3>
          </div>)

          : (
            <>
            <table>
              <thead>
                <tr>
                  <th className="p-1 lg:px-4 lg:py-2">Imagen</th>
                  <th className="p-1 lg:px-4 lg:py-2">Nombre</th>
                  <th className="p-1 lg:px-4 lg:py-2">Precio</th>
                  <th className="p-1 lg:px-4 lg:py-2">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {bag.map(product => (
                  <tr key={product.id} className="text-center">
                    <td className="p-1 lg:px-4 lg:py-2"><img className="w-10 mx-auto" src={product.image} alt="" /></td>
                    <td className="p-1 lg:px-4 lg:py-2 text-sm">{product.title}</td>
                    <td className="p-1 lg:px-4 lg:py-2">${product.price}</td>
                    <td className="p-1 lg:px-4 lg:py-2">
                      <button
                        type="button"
                        className="w-4 mr-1 bg-black text-white"
                        onClick={() => decreaseQuantity(product.id)}>
                        -
                      </button>
                      {product.quantity}
                      <button
                        type="button"
                        className="w-4 ml-1 bg-black text-white"
                        onClick={() => increaseQuantity(product.id)}>
                        +
                      </button>
                    </td>
                    <td>
                      <i className='bx bx-x bg-red-600 p-1 lg:mr-2 rounded-full text-white'
                      onClick={() => removeFromBag(product.id)}
                      ></i>
                    </td>
                  </tr>
                  
                ))}
              </tbody>
            </table>
            
            <div className="bg-neutral-300 mt-4">
              <p className="pl-4 py-4">Total: <strong>$ {bagTotal}</strong></p>
              <button className="w-full py-4 bg-black text-white"
              onClick={clearBag}
              >Vaciar Bolsa</button>
            </div>
            </>
            )}
          </div>
          
        </div>



      </div>
    </div>
  );
}

export default Header;