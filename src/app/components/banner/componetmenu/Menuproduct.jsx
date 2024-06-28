
import './menucomponent.css'
import Link from "next/link";

const Menuproduct = ({ valores, subtitulo}) => {
    return (
        <div className='w-full mencomponet  text-black   '>
            <div className='flex justify-center  box-border  mencomponet-box   h-[100%] w-[100%] pb-5 '>
                <div className='mt-5 mb-5  w-full px-[2%]'>
                    <h2 className='font-bold mb-2'>{subtitulo} </h2>
                    <ul className='grid-list'>
                        {valores.map((item) => (
                            <li key={item.id}>
                                <Link href={item.link}>{item.titulo}</Link>
                             <span className='underline'></span>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>

        </div>
    );
}

export default Menuproduct;