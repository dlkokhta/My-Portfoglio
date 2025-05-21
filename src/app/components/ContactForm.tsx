import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
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
      } else {
      }
    } catch (error) {
      console.error("Send error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="mt-20 border p-5">
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
          className="px-3 h-32"
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
