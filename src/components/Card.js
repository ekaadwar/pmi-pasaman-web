export const ProfileCard = ({ content = <div /> }) => {
  return (
    <div className="bg-white rounded-xl py-8 px-5 border-b-8 border-red-800">
      {content}
    </div>
  );
};

export const ProfileCardFullHeight = ({ content = <div /> }) => {
  return (
    <div className="bg-white rounded-xl py-8 px-5 border-b-8 border-red-800 h-full">
      {content}
    </div>
  );
};

export const UnderLine = () => {
  return <div className="h-2 rounded-b-xl bg-red-800" />;
};
