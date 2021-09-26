function HeaderIcon({ Icon, active, name, onHandle }) {
  return (
    <div
      onClick={() => onHandle(name)}
      className={`flex group cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 items-center rounded-xl active:border-b-2 active:border-blue-500 ${
        active && "border-b-2 border-blue-500 rounded-none"
      }`}
    >
      <Icon
        className={` h-5  text-center sm:h-6 mx-auto group-hover:text-blue-500  ${
          active ? "text-blue-500" : "text-gray-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
