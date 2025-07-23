export default function InputField({ id, labelText, type }) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} className="border-[1px]"></input>
    </>
  );
}
