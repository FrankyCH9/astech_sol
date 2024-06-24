
import './menucomponent.css'

const Menuproduct = ({ valores }) => {
    return (
        <div className='w-full mencomponet  text-black   '>
            <div className='flex justify-center  box-border bg-white  h-[100%] w-[100%] pb-5 '>
                <div className='mt-5 mb-5  w-full px-[2%]'>
                    <h2 className='font-bold mb-2'>Nuestros Productos</h2>
                    <ul className='grid-list'>
                        {valores.map((item) => (
                            <li key={item.id}>{item.titulo} <span className='underline'>eee</span></li>
                        ))}
                    </ul>
                </div>


            </div>

        </div>
    );
}

export default Menuproduct;