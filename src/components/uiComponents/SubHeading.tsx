const SubHeading = ({ heading }: { heading: string }) => {
  return (
    <div>
      <p className='font-Outfit  text-lg font-semibold leading-7 text-[#385B8B]'>
        {heading}
      </p>

      <hr className='w-855 h-0.5 flex-shrink-0 bg-gray-200' />
    </div>
  );
};
export default SubHeading;
