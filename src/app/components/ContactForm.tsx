import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [messageStatus, setMessageStatus] = useState<
    "success" | "error" | null
  >(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("/api/contact", data);
      if (response.status === 200) {
        setMessageStatus("success");
      } else {
        setMessageStatus("error");
      }
    } catch (error) {
      setMessageStatus("error");
    }

    // Hide the message after 3 seconds
    setTimeout(() => setMessageStatus(null), 3000);
  };

  return (
    <div className="mt-20 border p-5">
      {messageStatus && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white border px-6 py-4 rounded-lg shadow-xl text-center">
            <p className="text-lg font-semibold text-black">
              {messageStatus === "success"
                ? "Message sent!"
                : "Failed to send message."}
            </p>
          </div>
        </div>
      )}
      <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Your name"
          required
          className="px-3"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Your email"
          required
          className="px-3"
        />
        <textarea
          {...register("message")}
          placeholder="Your message"
          required
          className="px-3"
        ></textarea>
        <button
          type="submit"
          className="border px-2 py-1 rounded-md border-green-500  bg-black cursor-pointer duration-500 transition hover:-translate-y-1 hover:-translate-x-1 text-white mt-3"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
