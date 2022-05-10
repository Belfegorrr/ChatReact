import { CloseButton } from "../../CloseButton";

import { useState } from "react";

import bugImageUrl from '../../components/assets/bug.svg'
import ideaImageUrl from '../../components/assets/idea.svg'
import thoughtImageUrl from '../../components/assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedBackTypeSteps";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";

 export const feedBackTypes = {
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

export type FeedBackType = keyof typeof feedBackTypes;

export function WidgetForm() {
const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null)

function handleRestartFeedback(){
  setFeedBackType(null);
}

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
      {!feedBackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType}/>
      ) : (
        <FeedBackContentStep 
        onFeedBackRestartRequested={handleRestartFeedback}
        feedBackType={feedBackType} />
    )}     


      <footer className="text-xs text-neutral-400 underline underline-offset-2">
        Feito com carinho para você

      </footer>
    </div>
  )
}