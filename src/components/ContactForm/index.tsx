import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_4fd34ox",
        "template_tu8gru4",
        formRef.current!,
        "m0Ohgsi6YPjHNfkmo"
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          alert("Mesaj gönderilemedi: " + error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div
      className="max-w-md mx-auto mt-10
    "
    >
      {isSent && (
        <div className="p-2 mb-4 text-green-600 border border-green-500 rounded">
          {t("form.success_message")}
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col items-center w-[350px] lg:w-[400px] gap-8"
      >
        <input
          type="text"
          name="user_name"
          required
          placeholder={t("form.name_placeholder")}
          className="w-full p-2 border-l-3 border-b-3 border-black"
        />
        <input
          type="email"
          name="user_email"
          required
          placeholder={t("form.email_placeholder")}
          className="w-full p-2  border-l-3 border-b-3 border-black"
        />
        <input
          type="phone"
          name="user_phone"
          required
          placeholder={t("form.phone_placeholder")}
          className="w-full p-2  border-l-3 border-b-3 border-black"
        />
        <textarea
          name="message"
          required
          placeholder={t("form.message_placeholder")}
          className="w-full p-2  border-l-3 border-b-3 border-black"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 text-black  border-x-3 border-black w-[150px] cursor-pointer"
        >
          {loading ? t("form.sending") : t("form.submit_button")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
