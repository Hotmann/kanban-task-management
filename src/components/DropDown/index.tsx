interface DropDownProps {
  show: boolean;
}

const DropDown = ({ show }: DropDownProps) => {
  return (
    <div
      className={
        show
          ? `flex flex-col z-10 p-4 bg-white dark:bg-dark-grey rounded-lg text-sm w-36 absolute right-0 top-9 group-focus:block`
          : `hidden`
      }
    >
      <p className="w-full text-base text-medium-grey hover:text-medium-grey/70">
        Edit Board
      </p>
      <p className="w-full text-base text-red hover:text-red/70 mt-4">
        Delete Board
      </p>
    </div>
  );
};
export default DropDown;
