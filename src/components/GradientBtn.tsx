interface GradientBtnProps {
  btn_title: string;
}

const GradientBtn: React.FC<GradientBtnProps> = ({ btn_title }) => {
  return (
    <div className="text-3xl text-white font-semibold bg-custom-gradient flex justify-center items-center px-8 py-3 rounded-2xl">
      {btn_title}
    </div>
  );
};

export default GradientBtn;
