import { useState } from 'react';
import { HOME_PAGE_SECTIONS } from '../models/home.model';

export type ApplicationForm = {
  fullName: string;
  email: string;
  mobileNumber: string;
  track: string;
  cvFile: File | null;
  agreeNDA: boolean;
};

/**
 * Controller layer — home page state & actions.
 * Handles application form state, validation, and submission.
 */
export function useHomePage() {
  const [form, setForm] = useState<ApplicationForm>({
    fullName: '',
    email: '',
    mobileNumber: '',
    track: 'Website Development',
    cvFile: null,
    agreeNDA: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'mobileNumber') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (file: File | null) => {
    setForm((prev) => ({ ...prev, cvFile: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.mobileNumber || !form.agreeNDA) {
      alert('Please fill out all required fields and agree to the NDA.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      alert('Application submitted successfully! Our team will contact you soon.');
      // Reset form
      setForm({
        fullName: '',
        email: '',
        mobileNumber: '',
        track: 'Website Development',
        cvFile: null,
        agreeNDA: false,
      });
    } catch (error) {
      setSubmitStatus('error');
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    sections: HOME_PAGE_SECTIONS,
    form,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleCheckboxChange,
    handleFileChange,
    handleSubmit,
  };
}
