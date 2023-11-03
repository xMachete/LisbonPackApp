export default function Stats({ itemsLength, itemsPacked }) {
  return (
    <footer className="stats">
      <em>
        `You currently have {itemsLength} intems to pack. You already packed{" "}
        {itemsPacked}({(itemsPacked / itemsLength) * 100} %)`
      </em>
    </footer>
  );
}
