import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

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
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message.");
        <div className="to-transparen h-[1px] bg-gradient-to-r from-transparent via-slate-400 mt-10"></div>;
      }
      reset();
    } catch (error) {
      console.error("Send error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="pb-32">
      <div className="to-transparen h-[1px] bg-gradient-to-r from-transparent via-slate-400 mt-10"></div>
      <h3 className="text-xl font-bold mb-5 text-center text-white mt-24">
        Contact Me
      </h3>
      <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Your name"
          required
          className="border-2  focus:border-cyan-600 focus:outline-none px-3 py-2 rounded"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Your email"
          required
          className="border-2  focus:border-cyan-600 focus:outline-none px-3 py-2 rounded"
        />
        <textarea
          {...register("message")}
          placeholder="Your message"
          required
          className="h-32 pt-3 border-2  focus:border-cyan-600 focus:outline-none px-3 py-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="border px-2 py-1 rounded-md border-cyan-600 bg-black cursor-pointer duration-500 transition hover:-translate-y-1 hover:-translate-x-1 text-white mt-3"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
