interface sectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: sectionTitleProps) => {
  return (
    <>
      <h1 className="text-4xl font-medium">{title}</h1>
      <h1 className="text-4xl font-medium text-[#8BAC3E]">Receipt</h1>
    </>
  );
};

export default SectionTitle;
