import s from "./TransactionHistory.module.css"
const TransactionHistory = ({ transactions }) => {
    return (
        
        <table className={s.table}>
            <thead>
                <tr>
                    <th className={s.table_th}>Type</th>
                    <th className={s.table_th}>Amount</th>
                    <th className={s.table_th}>Currency</th>
                </tr>
            </thead>
             <tbody>
            {transactions.map((transaction) => {
            return (
                <tr key={transaction.id}>
                    <td className={s.table_td}>{transaction.type}</td>
                    <td className={s.table_td}>{transaction.amount}</td>
                    <td className={s.table_td}>{transaction.currency}</td>
                </tr>
               )
            })}
            </tbody>
        </table>
    );
};
export default TransactionHistory;