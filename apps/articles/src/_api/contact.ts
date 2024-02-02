import { IContactFormSchema } from "@/_utils/schemas/contact-form.schema"

export async function sendContactForm(form: IContactFormSchema) {
  const response = await fetch('/api/email/contact-me', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      message: form.text
    })
  })

  if (!response.ok) {
    throw new Error('404')
  }

  return response
}