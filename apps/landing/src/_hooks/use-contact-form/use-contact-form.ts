'use client';
import { useState } from "react";
import { IContactFormSchema } from "@/_utils/schemas/contact-form.schema";
import { sendContactForm } from "@/_api/contact";

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (form: IContactFormSchema) => {
    setError('');
    try {
      setIsLoading(true);
      await sendContactForm(form)
      setIsFinished(true);
    } catch (e) {
      setError('Something went wrong.')
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    isFinished,
    error,
    handleSubmit
  }
}

export default useContactForm;