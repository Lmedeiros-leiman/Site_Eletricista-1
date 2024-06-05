

import { SimpleButton } from '../SimpleButton/SimpleButton'
import { BackgroundBlobs, BackgroundBlobs2 } from './components/BackgroundBlobs'




const Landing = () => {
    return ( 
<div className="bg-white">

        <div className="relative isolate px-6 pt-14 lg:px-8">
            <BackgroundBlobs/>

        <div className="
            mx-auto max-w-2xl my-16 sm:my-18 lg:my-24 py-6 px-4 rounded-xl bg-white border-2 border-black/75 shadow-lg shadow-black/75
            hover:shadow-indigo-600/75 transition-all duration-300 hover:border-indigo-600/75
            ">
            
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Novos tipos de parceirias anunciadas!{' '}
                    <SimpleButton href='#' showArrow={true}
                            TextclassName="font-semibold text-indigo-600" 
                            ArrowclassName={undefined}
                    >
                        <span className="absolute inset-0" aria-hidden="true" />
                        Leia Sobre 
                    </SimpleButton>
                </div>

            </div>
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 hover:text-indigo-700 transition-all sm:text-6xl">
                    Conheça os melhores eletreticistas do Brasil
                </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Resolva seus problemas elétricos com a seleção dos melhores talentos de cada localidade que o brasil pode oferecer.
            </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                
                <SimpleButton href='#'
                            TextclassName='cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' 
                            showArrow={undefined} ArrowclassName={undefined}
                >Contate um profissional.</SimpleButton>

                <SimpleButton href='#'
                            TextclassName=' cursor-pointer text-sm font-semibold leading-6 text-gray-900' 
                            showArrow={true} ArrowclassName={undefined}
                >Sobre nós </SimpleButton>
                
                </div>
            </div>
        </div>
        
            <BackgroundBlobs2/>
    </div>
</div>)
    
}


export { Landing }



