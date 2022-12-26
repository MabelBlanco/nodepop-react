export function ConfirmDiv({ question, yesFunction, noFunction }) {
  return (
    <div>
      <div>{question}</div>
      <button onClick={yesFunction}>Si</button>
      <button onClick={noFunction}>No</button>
    </div>
  );
}
