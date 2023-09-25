const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const Table = (props) => {
  return (
   
<table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      
        <tbody className="table-body">
          {props.data.map((data) => {
            return (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{currencyFormatter.format(data.savingsEndOfYear)}</td>
                <td>{currencyFormatter.format(data.yearlyInterest)}</td>
                <td>
                  {currencyFormatter.format(
                    data.savingsEndOfYear -
                      props.initialInvestment -
                      data.yearlyContribution * data.year
                  )}
                </td>
                <td>
                  {currencyFormatter.format(
                    props.initialInvestment +
                      data.yearlyContribution * data.year
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      
    </table>

    
  );
};

export default Table;
