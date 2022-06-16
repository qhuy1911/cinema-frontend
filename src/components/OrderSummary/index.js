import "./OrderSummary.css";

function OrderSummary() {
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
        <span>2</span>
        <span>90,000 đ</span>
      </div>
      <div className="summary-total">
        <span>Tổng</span>
        <span>90,000 đ</span>
      </div>
    </div>
  );
}

export default OrderSummary;
