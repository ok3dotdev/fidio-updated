const LabeledInputs = ({
  label,
  placeholder,
  name,
  register,
  value,
  onChange,
}) => {
  return (
    <div className='flex flex-col'>
      <label className='font-sans mb-1'>{label}</label>
      <input
        type='text'
        className='bg-dashFg font-sans p-2 px-4 rounded-[8px]'
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  );
};

export default LabeledInputs;
