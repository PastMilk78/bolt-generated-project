import { useState } from 'react';

    export default function Home() {
      const [transactions, setTransactions] = useState([]);
      const [description, setDescription] = useState('');
      const [amount, setAmount] = useState('');

      const addTransaction = (type) => {
        if (!description || !amount || parseFloat(amount) <= 0) {
          alert('Por favor, completa todos los campos correctamente.');
          return;
        }

        const transactionAmount = type === 'income' ? parseFloat(amount) : -parseFloat(amount);
        const newTransaction = {
          description,
          amount: transactionAmount,
          time: new Date(),
        };

        setTransactions([...transactions, newTransaction]);
        setDescription('');
        setAmount('');
      };

      const removeTransaction = (index) => {
        const now = new Date();
        const transactionTime = new Date(transactions[index].time);
        const diff = (now - transactionTime) / 1000 / 60; // diferencia en minutos

        if (diff <= 1) {
          setTransactions(transactions.filter((_, i) => i !== index));
        } else {
          alert('No se puede eliminar la transacción después de un minuto.');
        }
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
            <button onClick={() => addTransaction('income')} style={styles.button}>+</button>
            <button onClick={() => addTransaction('expense')} style={styles.button}>-</button>
          </div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Monto (MXN $)</th>
                <th>Hora</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount.toFixed(2)}</td>
                  <td>{transaction.time.toLocaleTimeString()}</td>
                  <td>
                    <button onClick={() => removeTransaction(index)} style={styles.deleteButton}>Eliminar</button>
                  </td>
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
        margin: '0 5px',
      },
      deleteButton: {
        padding: '5px 10px',
        backgroundColor: '#FF6347',
        border: 'none',
        color: '#FFFFFF',
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
