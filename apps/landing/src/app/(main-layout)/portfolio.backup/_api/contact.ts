import { IContactForm } from "../_forms";

export async function sendContactForm(form: IContactForm) {
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