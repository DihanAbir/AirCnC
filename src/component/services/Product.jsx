import React from "react";
import { IoArrowRedoSharp } from "react-icons/io5";

function Product({ item }) {
  console.log();
  return (
    <div className="m-4 product">
      <h3>Read All Police before Payment</h3>
      <br />

      <p>
        {" "}
        <IoArrowRedoSharp /> The payment policy applies to all companies in the
        Arla Foods group and all supplier payments.
      </p>
      <p>
        {" "}
        <IoArrowRedoSharp /> Arla Foods standard payment terms are 60 days.
      </p>
      <p>
        {" "}
        <IoArrowRedoSharp /> Due date is calculated by applying agreed terms to
        the latter of valid invoice presented or goods receipt date. All
        invoices are paid on our calculated due date.
      </p>
      <p>
        {" "}
        <IoArrowRedoSharp /> If an invoice falls due during a weekend or
        holiday, the payment transaction is executed on the following business
        day.
      </p>
      <p>
        {" "}
        <IoArrowRedoSharp /> E-invoice is the required way of invoice submission
        to Arla Foods (subject to Arla’s enablement program and its timeline).
        Requirements and benefits for the Suppliers are available under
        Frequently Asked Questions in E-invoicing section of this page.
      </p>
      <p>
        {" "}
        <IoArrowRedoSharp /> Alternatively, until further notice, invoices can
        be sent to us in PDF (Portable Document Format).
      </p>
      <p>
        {" "}
        <IoArrowRedoSharp /> In case of any disagreements concerning content of
        invoices, full crediting is claimed along with a new corrected invoice.
      </p>
    </div>
  );
}

export default Product;
