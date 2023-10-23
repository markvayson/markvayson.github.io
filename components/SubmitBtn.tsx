import { experimental_useFormStatus as useFormStatus } from "react-dom";
const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className=" z-20  w-fit  rounded-lg bg-slate-900 px-2 py-1 text-slate-50 disabled:bg-red-500 dark:bg-slate-800 dark:text-slate-50"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-slate-900 dark:border-slate-100" />
      ) : (
        "Send Message"
      )}
    </button>
  );
};

export default SubmitBtn;
