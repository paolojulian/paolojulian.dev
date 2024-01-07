import * as Yup from 'yup'

export const contactFormSchema = Yup.object({
  name: Yup.string().required().label('Name'),
  email: Yup.string().email().required().max(320).label('Email'),
  text: Yup.string().required().max(5000).label('Message'),
});