interface TitleProps {
  label: string;
}
const Title = ({ label }: TitleProps) => {
  return (
    <div
      className="font-semibold text-[21px] text-[#32C0C6]"
      data-testid="title"
    >
      {label}
    </div>
  );
};

export default Title;
