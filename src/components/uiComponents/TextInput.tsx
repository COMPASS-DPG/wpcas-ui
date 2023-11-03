const TextInput = ({
  subheading,
  width,
}: {
  subheading: string;
  width: string;
}) => {
  return (
    <div className={`w-${width}`}>
      <p className='text-font-sub-text font-Outfit mb-2 mt-3 text-base  font-medium text-[#6F747E] '>
        {subheading}
      </p>

      <input
        className='focus:#3b82f680 w-full appearance-none rounded border px-4 py-2.5 text-[16px] leading-tight shadow focus:outline-none'
        id='username'
        type='text'
        placeholder='Entry Level'
      />
    </div>
  );
};
export default TextInput;
