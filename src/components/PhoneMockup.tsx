interface PhoneMockupProps {
  imageSrc: string; // Caminho para a imagem do print na sua pasta public ou assets
  altText: string;
}

export const PhoneMockup = ({ imageSrc, altText }: PhoneMockupProps) => (
  <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[450px] w-[250px] shadow-xl overflow-hidden">
    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -right-[17px] top-[124px] rounded-r-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
      <img src={imageSrc} className="w-full h-full object-cover" alt={altText} />
    </div>
  </div>
);