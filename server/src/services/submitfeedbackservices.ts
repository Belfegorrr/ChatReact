import { MailAdapter } from "../repositories/adapeters/mail-adapter";
import { FeedbackRepository } from "../repositories/Feedbacks";

//CAMADA DE APLICAÇÃO

export interface SubmitFeedbackUseCaseRequest {
   type: string,
   comment: string,
   screenshot?: string,
}

export class SubmitFeedbackUseCase {
  constructor (
    private feedbacksRepository: FeedbackRepository,
    private mailAdapter: MailAdapter,

  ) {}

    async execute(request: SubmitFeedbackUseCaseRequest) {
      const { type, comment, screenshot } = request;

      await this.feedbacksRepository.create({
          type,
          comment,
          screenshot,
    })

   await this.mailAdapter.sendMail({
     subject: 'Novo Feedback',
      body: [
       `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
       `<p>Tipo  do feedback: ${type}</p>`,
       `<p>Comentário: ${comment}</p>`,
       `</div>`    
     ].join('\n')
    })
  }
}
