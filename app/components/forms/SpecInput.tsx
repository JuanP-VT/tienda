import { ProductWithId, Spec } from "@/app/types/product";
import React, { useState } from "react";

type Props = {
  index: number;
  setSpecs: React.Dispatch<React.SetStateAction<Spec[]>>;
  productSpecs: Spec[];
  setProductSpecs: React.Dispatch<React.SetStateAction<Spec[]>>;
  mode: "col" | "row";
};

function SpecInput({
  index,
  setSpecs,
  productSpecs,
  setProductSpecs,
  mode,
}: Props) {
  const [newSpec, setNewSpec] = useState<Spec>({
    key: productSpecs[index]?.key ?? "",
    value: productSpecs[index]?.value ?? "",
  });
  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedKey = e.currentTarget.value;
    setNewSpec((prevSpec) => ({ ...prevSpec, key: updatedKey }));
    const updatedSpecs = [...productSpecs];
    updatedSpecs[index] = { ...newSpec, key: updatedKey };
    setSpecs(updatedSpecs);
    setProductSpecs(updatedSpecs);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = e.currentTarget.value;
    setNewSpec((prevSpec) => ({ ...prevSpec, value: updatedValue }));
    const updatedSpecs = [...productSpecs];
    updatedSpecs[index] = { ...newSpec, value: updatedValue };
    setSpecs(updatedSpecs);
    setProductSpecs(updatedSpecs);
  };

  return (
    <div className={`flex flex-col text-sm font-semibold`}>
      <label className="block">Spec</label>
      <div className={`flex flex-${mode} p-1`}>
        <input
          className="focus:shadow-outline  appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow 
          placeholder:text-sm focus:outline-none"
          type="text"
          placeholder="key"
          onChange={(e) => handleKeyChange(e)}
          defaultValue={productSpecs[index]?.key ?? ""}
        />
        <input
          className="focus:shadow-outline appearance-none rounded border px-3 py-2 text-sm leading-tight  text-gray-700 shadow 
          focus:outline-none"
          type="text"
          placeholder="value"
          onChange={(e) => handleValueChange(e)}
          defaultValue={productSpecs[index]?.value ?? ""}
        />
      </div>
    </div>
  );
}

export default SpecInput;
