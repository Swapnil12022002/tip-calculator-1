export default function Bill({ bill, onBillChange }) {
  return (
    <div className="bill">
      <form>
        <label>How much was the bill?</label>
        <input
          type="text"
          placeholder="Bill Value"
          value={bill}
          onChange={(e) => onBillChange(Number(e.target.value))}
        />
      </form>
    </div>
  );
}
