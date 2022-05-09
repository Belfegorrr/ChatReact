import { CloseButton } from "./CloseButton";
import { useState } from "react";
import bugImageUrl from '../components/bug.svg'
import ideaImageUrl from '../components/idea.svg'
import thoughtImageUrl from '../components/thought.svg'

const feedBackTypes = {
  BUG:{
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um Inseto'
    },
  },
  IDEA:{
    title: 'Sugestão',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    },
  },
  OTHER:{
    title: 'Outros',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem'
    },
  },
};

type FeedBackType = keyof typeof feedBackTypes;

export function WidgetForm() {
const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null)

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      <header>
        <span className="text-xl leading-6">Deixe seu FeedBack</span>

        <CloseButton /> 
      </header>

      {!feedBackType ? (<div className="flex py-8 gap-2 w-full">
        {Object.entries(feedBackTypes).map(([key,value]) => {
          return(
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus-border-500 focus: outline-none"
              onClick={() => setFeedBackType(key as FeedBackType)}
              type="button"
            
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
             </button>
          )          
        })}
        


      </div>) : (
        <p>Hello world</p>
    )}
      


      <footer className="text-xs text-neutral-400 underline underline-offset-2">
        Feito com carinho para você

      </footer>
    </div>
  )
}