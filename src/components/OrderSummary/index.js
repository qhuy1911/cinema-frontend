import "./OrderSummary.css";

function OrderSummary({ quantity }) {
  const price = 45000;
  return (
    <div className="summary-wrapper">
      <div className="summary-heading">Tóm tắt đơn hàng</div>
      <div className="summary-head-table">
        <span>Mô tả</span>
        <span>Số Lượng</span>
        <span>Thành tiền</span>
      </div>
      <div className="summary-item">
        <span>Standard</span>
        <span>{quantity}</span>
        <span>{quantity * price} đ</span>
      </div>
      <div className="summary-total">
        <span>Tổng</span>
        <span>{quantity * price} đ</span>
      </div>
    </div>
  );
}

export default OrderSummary;
