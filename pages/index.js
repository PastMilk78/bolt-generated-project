import { useState } from 'react';
    import Image from 'next/image';
    import logo from '../public/logo.png';

    export default function Home() {
      const [transactions, setTransactions] = useState([]);
      const [description, setDescription] = useState('');
      const [amount, setAmount] = useState('');

      const addTransaction = () => {
        setTransactions([...transactions, { description, amount }]);
        setDescription('');
        setAmount('');
      };

      return (
        <div style={styles.container}>
          <Image src={logo} alt="Logo" width={100} height={100} />
          <h1 style={styles.title}>Team Accounting</h1>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.input}
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={styles.input}
            />
            <button onClick={addTransaction} style={styles.button}>Add Transaction</button>
          </div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
        letterSpacing: '-0.15em',
        lineHeight: '0.85em',
        color: '#FFD700',
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
    };
