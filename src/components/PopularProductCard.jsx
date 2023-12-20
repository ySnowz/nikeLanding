import { star } from "../assets/icons";

export const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img className="w-[280px] h-[280px]" src={imgURL} />
      <div className="mt-2 flex justify-start gap-2.5">
        <img src={star} alt="rating"
        width={15} height={15}/>
        <p className="font-montserrat text-sm text-slate-gray">(4.5)</p>
      </div>
        <h2 className="font-bold font-palaquin text-xl pt-1">{name}</h2>
        <p className="mt-2 font-medium font-palaquin text-2sm text-coral-red">{price}</p>
    </div>
  );
};
