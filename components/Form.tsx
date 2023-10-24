import SubmitBtn from "./SubmitBtn";
import { sendEmail } from "@/lib/sendEmail";

const Form = () => {
  return (
    <form
      action={sendEmail}
      className="relative   flex h-full w-full flex-col items-center gap-5 px-5 py-5   md:gap-10  "
    >
      <fieldset className="relative h-[3.1rem] w-full  ">
        <label>
          <input
            type="email"
            name="email"
            required
            maxLength={500}
            className="inputClass peer rounded-lg"
          />
          <span className="inputLabelClass">Your Email</span>
        </label>
      </fieldset>
      <fieldset className="relative h-24 w-full flex-auto ">
        <label>
          <textarea
            minLength={10}
            maxLength={2000}
            className="inputClass peer h-full w-full rounded-lg"
            name="message"
            required
          />
          <span className="inputLabelClass">Your Message</span>
        </label>
      </fieldset>
      <SubmitBtn />
    </form>
  );
};

export default Form;
