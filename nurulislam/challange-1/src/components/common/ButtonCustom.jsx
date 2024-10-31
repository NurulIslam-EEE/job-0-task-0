function ButtonCustom({ title, className }) {
  return (
    <div
      className={`bg-[#171717] w-fit py-3 text-white text-center rounded-lg cursor-pointer ${className}`}
    >
      {title}
    </div>
  );
}

export default ButtonCustom;
