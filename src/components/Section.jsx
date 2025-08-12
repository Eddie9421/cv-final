export default function Section({ children, sectionName }) {
  return (
    <>
      <div className="flex flex-col border-2 p-2 my-6 rounded text-shadow-lg">
        <h2 className="flex justify-center">{sectionName}</h2>
        {children}
      </div>
    </>
  );
}
