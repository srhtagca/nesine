export const Header = ({ length }: { length: number }) => {
  return (
    <div className="row heading">
      <div className="cell">{`Event Count: ${length}`}</div>
      <div className="cell">Yorumlar</div>
      <div className="cell"></div>
      <div className="cell">1</div>
      <div className="cell">x</div>
      <div className="cell">2</div>
      <div className="cell">Alt</div>
      <div className="cell">Ust</div>
      <div className="cell">H1</div>
      <div className="cell">1</div>
      <div className="cell">x</div>
      <div className="cell">2</div>
      <div className="cell">H2</div>
      <div className="cell">1-x</div>
      <div className="cell">1-2</div>
      <div className="cell">2-x</div>
      <div className="cell">Var</div>
      <div className="cell">Yok</div>
      <div className="cell">+99</div>
    </div>
  );
};
