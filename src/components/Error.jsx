const Error = ({ children }) => {
  return (
    <div className='bg-red-500 font-bold text-white text-center p-3 uppercase mb-5 rounded-lg'>
      {children}
    </div>
  );
};

export default Error;
