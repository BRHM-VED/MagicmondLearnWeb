import { useState } from 'react';
import { HOME_PAGE_SECTIONS } from '../models/home.model';

export type ApplicationForm = {
  fullName: string;
  email: string;
  mobileNumber: string;
  track: string;
  cvLink: string;
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
    cvLink: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.mobileNumber || !form.cvLink || !form.agreeNDA) {
      alert('Please fill out all required fields and agree to the NDA.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://backend.magicmond.com/api/MagicMondLearnRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phoneNumber: form.mobileNumber,
          masteryTrack: form.track,
          cvLink: form.cvLink,
          ndaAgree: form.agreeNDA ? 'Yes' : 'No',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit registration');
      }

      setSubmitStatus('success');
      alert('Application submitted successfully! Our team will contact you soon.');
      // Reset form
      setForm({
        fullName: '',
        email: '',
        mobileNumber: '',
        track: 'Website Development',
        cvLink: '',
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
    handleSubmit,
  };
}
