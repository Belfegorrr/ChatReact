import { SubmitFeedbackUseCase } from "./submitfeedbackservices"

describe('Submit Feedback', () => {
  it('should be able to submit a feedback', async () => {
    const submitfeedback = new SubmitFeedbackUseCase(

      { create: async () => {} },
      { sendMail: async () => {} }
    )

    await expect(submitfeedback.execute({
      type: 'BUG',
      comment: 'IDEA',
      screenshot: 'OUTRO.jpg'
    })).resolves.not.toThrow();
  });
}); 
