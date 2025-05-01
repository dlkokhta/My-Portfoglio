const ContactForm = () => {
  return (
    <div className="">
      <form className="flex flex-col">
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message" required></textarea>
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
