import { useState } from 'react';

    export default function Home() {
      const [transactions, setTransactions] = useState([]);
      const [description, setDescription] = useState('');
      const [amount, setAmount] = useState('');

      const addTransaction = () => {
        setTransactions([...transactions, { description, amount: parseFloat(amount) }]);
        setDescription('');
        setAmount('');
      };

      const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

      return (
        <div style={styles.container}>
          <h1 style={styles.title}>Think Deep Accounting</h1>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.input}
            />
            <input
              type="number"
              placeholder="Monto"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={styles.input}
            />
            <button onClick={addTransaction} style={styles.button}>Agregar Transacción</button>
          </div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Monto (MXN $)</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 style={styles.total}>Total: MXN ${total.toFixed(2)}</h2>
        </div>
      );
    }

    const styles = {
      container: {
        padding: '20px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '#FFFFFF',
        backgroundColor: '#333333',
        textAlign: 'center',
      },
      title: {
        letterSpacing: '-0.05em',
        lineHeight: '0.85em',
        color: '#FFD700',
        marginBottom: '20px',
      },
      inputContainer: {
        margin: '20px 0',
      },
      input: {
        margin: '0 10px',
        padding: '10px',
        fontSize: '16px',
      },
      button: {
        padding: '10px 20px',
        backgroundColor: '#FFD700',
        border: 'none',
        color: '#333333',
        cursor: 'pointer',
      },
      table: {
        margin: '20px auto',
        width: '80%',
        borderCollapse: 'collapse',
      },
      th: {
        borderBottom: '2px solid #FFD700',
        padding: '10px',
      },
      td: {
        borderBottom: '1px solid #FFD700',
        padding: '10px',
      },
      total: {
        marginTop: '20px',
        color: '#FFD700',
      },
    };
