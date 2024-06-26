


import './menucomponentmobile.css'

const Menuproductmobile = ({ valores}) => {
    return (
        <div className='w-full mencomponetmobile   '>
            <div className='flex justify-center  box-border     '>
                <div className='mt-2  w-full px-[1%]'>
                    <ul className='grid-list'>
                        {valores.map((item) => (
                            <li key={item.id}>{item.titulo}</li>
                        ))}
                    </ul>
                </div>


            </div>

        </div>
    );
}

export default Menuproductmobile;