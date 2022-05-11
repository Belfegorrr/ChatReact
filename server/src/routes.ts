import express from 'express';
import nodemailer from 'nodemailer'
import { prisma } from './prisma';
import { NodemailerMailAdapter } from './repositories/adapeters/nodemailer/nodemailer-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './services/submitfeedbackservices';


export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter)

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  })
  return res.status(201).send();
});