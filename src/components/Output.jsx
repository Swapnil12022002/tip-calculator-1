export default function Output({ total, bill, averageTip }) {
  return (
    Number(bill) > 0 && (
      <div className="output">
        <h2>
          You pay ${total} (${bill} + ${averageTip} )
        </h2>
      </div>
    )
  );
}
